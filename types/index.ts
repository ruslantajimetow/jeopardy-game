import {
  insertAllQuestionsSchema,
  insertQuestionsSchema,
} from '@/lib/validators';
import { z } from 'zod';

export type AllQuestions = z.infer<typeof insertAllQuestionsSchema> & {
  id: number;
};

export type Question = z.infer<typeof insertQuestionsSchema>;
