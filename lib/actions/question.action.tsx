'use server';

import { AllQuestions } from '@/types';
import { prisma } from '@/db/prisma';
import { z } from 'zod';
import { insertUserResultSchema } from '../validators';
import { formatError } from '../utils';
import { InputJsonValue } from '@prisma/client/runtime/library';
import { revalidatePath } from 'next/cache';

export const getAllQuestions = async () => {
  const data = await prisma.questions.findMany({
    orderBy: { createdAt: 'desc' },
  });

  return JSON.parse(JSON.stringify(data)) as AllQuestions[];
};

export const submitResults = async (
  data: z.infer<typeof insertUserResultSchema>
) => {
  try {
    const result = insertUserResultSchema.parse(data);
    console.log(data);

    const questionData = {
      question: result.question,
      answer: result.answer,
      score: result.score,
      isCorrect: result.isCorrect,
    };

    const existingUserResult = await prisma.result.findFirst({
      where: { userId: result.userId },
    });

    if (existingUserResult) {
      await prisma.result.update({
        where: {
          id: existingUserResult.id,
        },
        data: {
          questions: [
            ...existingUserResult.questions,
            questionData,
          ] as InputJsonValue[],
        },
      });
    }
    if (!existingUserResult) {
      await prisma.result.create({
        data: {
          userId: result.userId,
          questions: [questionData],
        },
      });
    }

    revalidatePath('/game');

    return {
      success: true,
      message: 'Your answer has been submitted!',
    };
  } catch (error) {
    return {
      success: false,
      message: formatError(error),
    };
  }
};
