'use server';
import { prisma } from '@/db/prisma';
import { ResultWithTotalScore, UserResult } from '@/types';
import { formatError } from '../utils';
import { revalidatePath } from 'next/cache';

export const getResultsByUserId = async (userId: string) => {
  const result = await prisma.result.findFirst({
    where: { userId },
  });

  return {
    result: (JSON.parse(JSON.stringify(result)) as UserResult) || {
      id: 0,
      userId: '',
      questions: [],
      createdAt: null,
    },
  };
};

export const startNewGame = async (userId: string) => {
  try {
    const existingUserResult = await prisma.result.findFirst({
      where: { userId },
    });

    if (existingUserResult) {
      await prisma.result.delete({ where: { id: existingUserResult.id } });
    }

    revalidatePath('/game');

    return {
      success: true,
      message: 'Good luck in the very new game!',
    };
  } catch (error) {
    return {
      success: false,
      message: formatError(error),
    };
  }
};

export const getAllResults = async () => {
  const results = await prisma.result.findMany({
    select: {
      id: true,
      userId: true,
      questions: true,
      createdAt: true,
      user: { select: { name: true } },
    },
  });

  if (!results) return;

  const resultsWithTotalScore: ResultWithTotalScore[] = JSON.parse(
    JSON.stringify(results)
  ).map((result: UserResult) => {
    const totalScore = result.questions.reduce((p, c) => p + (c.score || 0), 0);
    return { ...result, totalScore };
  });

  const sortedResults = resultsWithTotalScore.sort(
    (a, b) => b.totalScore - a.totalScore
  );

  return sortedResults;
};
