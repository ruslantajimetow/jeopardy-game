import { z } from 'zod';

export const insertQuestionsSchema = z.object({
  question: z.string().min(1, 'Question is required'),
  answers: z.array(z.string()).min(4, 'At least 4 answers are required'),
  correctAnswer: z.string().min(1, 'Correct answer is required'),
  score: z.number(),
});

export const insertJeopardyCategoriesSchema = z.object({
  category: z.string().min(1, 'Category is required'),
  questions: z.array(insertQuestionsSchema),
});

export const insertUserResultSchema = z.object({
  userId: z.string().min(1, 'User id is equired'),
  question: z.string().min(1, 'Question is equired'),
  score: z.number(),
  isCorrect: z.boolean(),
});
