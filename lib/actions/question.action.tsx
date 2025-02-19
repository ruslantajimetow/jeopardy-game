'use server';

import { AllQuestions } from '@/types';
import { prisma } from '@/db/prisma';

export const getAllQuestions = async () => {
  const data = await prisma.questions.findMany({
    orderBy: { createdAt: 'desc' },
  });

  return JSON.parse(JSON.stringify(data)) as AllQuestions[];
};
