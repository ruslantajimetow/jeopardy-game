import {
  insertAllQuestionsSchema,
  insertQuestionsSchema,
  insertResultQuestionsSchema,
  insertResultswithTotalScoreSchema,
  insertUserDBResult,
} from '@/lib/validators';
import { z } from 'zod';

export type AllQuestions = z.infer<typeof insertAllQuestionsSchema> & {
  id: number;
};

export type Question = z.infer<typeof insertQuestionsSchema>;
export type UserResult = z.infer<typeof insertUserDBResult> & {
  id: number;
  createdAt: Date;
};

export type ResultQuestion = z.infer<typeof insertResultQuestionsSchema>;

export type ResultWithTotalScore = z.infer<
  typeof insertResultswithTotalScoreSchema
> & {
  user: { name: string };
};
