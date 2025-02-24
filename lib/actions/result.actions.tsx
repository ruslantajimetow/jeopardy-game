'use server';
import { prisma } from '@/db/prisma';
import { UserResult } from '@/types';
import { formatError } from '../utils';
import { revalidatePath } from 'next/cache';

export const getResultsByUserId = async (userId: string) => {
  const result = await prisma.result.findFirst({
    where: { userId },
  });

  return JSON.parse(JSON.stringify(result)) as UserResult;
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
