'use server';
import { prisma } from '@/db/prisma';

export const getResultsByUserId = async (userId: string) => {
  const result = await prisma.result.findFirst({
    where: { userId },
  });

  return result;
};
