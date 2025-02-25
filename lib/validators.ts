import { z } from 'zod';

export const insertQuestionsSchema = z.object({
  question: z.string().min(1, 'Question is required'),
  answers: z.array(z.string()).min(4, 'At least 4 answers are required'),
  correctAnswer: z.string().min(1, 'Correct answer is required'),
  score: z.number(),
});

export const insertAllQuestionsSchema = z.object({
  category: z.string().min(1, 'Category is required'),
  questions: z.array(insertQuestionsSchema),
});

export const insertUserResultSchema = z.object({
  userId: z.string().min(1, 'User id is equired'),
  question: z.string().min(1, 'Question is equired'),
  score: z.number(),
  answer: z.string().min(1, 'Answer is required'),
  isCorrect: z.boolean().optional(),
});

export const insertResultQuestionsSchema = z.object({
  question: z.string(),
  answer: z.string(),
  score: z.number(),
  isCorrect: z.boolean(),
});

export const insertUserDBResult = z.object({
  id: z.number(),
  userId: z.string().min(1, 'User id is equired'),
  questions: z.array(insertResultQuestionsSchema),
});

export const insertResultswithTotalScoreSchema = insertUserDBResult.extend({
  totalScore: z.number(),
});

export const signInFormSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters long'),
});

export const signUpFormSchema = z
  .object({
    name: z.string().min(3, 'Name must be at least 3 characters long'),
    email: z.string().email('Invalid email address'),
    password: z.string().min(6, 'Password must be at least 6 characters long'),
    confirmPassword: z
      .string()
      .min(6, 'Password must be at least 6 characters long'),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords do not match',
  });
