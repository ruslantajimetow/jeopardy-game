import { z } from 'zod';

export const insertQuestionSchema = z.object({
  question: z.string().min(1, 'Question is required'),
});
