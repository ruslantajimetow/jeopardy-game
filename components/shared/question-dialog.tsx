'use client';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { RadioGroup, RadioGroupItem } from '../ui/radio-group';
import { Button } from '../ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/form';
import { useForm } from 'react-hook-form';
import { Separator } from '../ui/separator';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { insertUserResultSchema } from '@/lib/validators';
import { submitResults } from '@/lib/actions/question.action';
import { ResultQuestion, UserResult } from '@/types';
import { useMemo, useState } from 'react';
import { toast } from 'sonner';

function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

export default function QuestionDialog({
  triggerTitle,
  question,
  answers,
  categoryName,
  userId,
  score,
  correctAnswer,
  userResult,
}: {
  triggerTitle: string;
  question: string;
  answers: string[];
  categoryName: string;
  userId: string;
  score: number;
  correctAnswer: string;
  userResult: UserResult;
}) {
  const [open, setOpen] = useState(false);
  const form = useForm<z.infer<typeof insertUserResultSchema>>({
    resolver: zodResolver(insertUserResultSchema),
    defaultValues: {
      answer: '',
      question: question,
      userId: userId,
      score: 0,
    },
  });

  const shuffledAnswers = useMemo(() => shuffleArray(answers), [answers]);

  const onSubmit = async () => {
    form.setValue('userId', userId);
    let message = '';
    if (form.getValues('answer') === correctAnswer) {
      form.setValue('score', score);
      form.setValue('isCorrect', true);
      message = `Wow, you earned ${score}`;
    } else {
      form.setValue('score', 0);
      form.setValue('isCorrect', false);
      message = `Oops, you gotta learn`;
    }
    const updatedValues = form.getValues();
    await submitResults(updatedValues);
    if (form.getValues('answer') !== correctAnswer) {
      toast.error('Next time!', {
        description: message,
        duration: 4000,
      });
    } else {
      toast.success('Nicely done!', {
        description: message,
        duration: 4000,
      });
    }
    setOpen(false);
    form.setValue('answer', '');
  };

  const answeredQuestions: ResultQuestion[] = userResult?.questions;
  const isQuestionAnswered = answeredQuestions.some(
    (item) => item.question === question
  );
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          onClick={() => setOpen(true)}
          disabled={isQuestionAnswered}
          variant="default"
        >
          {triggerTitle}
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-2xl">{categoryName}</DialogTitle>
          <DialogDescription>{question}</DialogDescription>
        </DialogHeader>
        <Separator />
        <Form {...form}>
          <form className="space-y-5" onSubmit={form.handleSubmit(onSubmit)}>
            <FormField
              control={form.control}
              name="answer"
              render={({ field }) => (
                <FormItem className="space-y-3">
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      value={field.value}
                      className="grid grid-cols-2 space-y-2 mx-auto"
                    >
                      {shuffledAnswers.map((ans) => {
                        return (
                          <FormItem
                            key={ans}
                            className="flex items-center space-x-3 space-y-0"
                          >
                            <FormControl>
                              <RadioGroupItem
                                value={ans}
                                checked={field.value === ans}
                              />
                            </FormControl>
                            <FormLabel className="font-normal">{ans}</FormLabel>
                            <FormMessage />
                          </FormItem>
                        );
                      })}
                    </RadioGroup>
                  </FormControl>
                </FormItem>
              )}
            />
            <Separator />
            <div>
              <Button
                className="w-full"
                type="submit"
                disabled={form.formState.isSubmitting}
              >
                {form.formState.isSubmitting
                  ? 'Submitting...'
                  : 'Submit answer'}
              </Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
