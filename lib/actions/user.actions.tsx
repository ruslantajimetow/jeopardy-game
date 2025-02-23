'use server';

import { signIn, signOut } from '@/auth';
import { prisma } from '@/db/prisma';
import { hashSync } from 'bcrypt-ts-edge';
import { isRedirectError } from 'next/dist/client/components/redirect-error';
import { formatError } from '../utils';
import { signInFormSchema, signUpFormSchema } from '../validators';

export const signInAction = async (prevState: unknown, formData: FormData) => {
  try {
    const user = signInFormSchema.parse({
      email: formData.get('email'),
      password: formData.get('password'),
    });
    await signIn('credentials', user);

    return { success: true, message: 'Signed in successfully' };
  } catch (error) {
    if (isRedirectError(error)) {
      throw error;
    }

    return { success: false, message: 'Invalid credentials' };
  }
};

export const signOutAction = async () => {
  await signOut();
};

export const signUpAction = async (prevState: unknown, formData: FormData) => {
  try {
    const user = signUpFormSchema.parse({
      name: formData.get('name'),
      email: formData.get('email'),
      password: formData.get('password'),
      confirmPassword: formData.get('confirmPassword'),
    });
    const hashedPassword = await hashSync(user.password, 10);

    await prisma.user.create({
      data: {
        name: user.name,
        email: user.email,
        password: hashedPassword,
      },
    });

    await signIn('credentials', {
      email: user.email,
      password: user.password,
    });

    return { success: true, message: 'Signed up successfully' };
  } catch (error) {
    if (isRedirectError(error)) {
      throw error;
    }

    return { success: false, message: formatError(error) };
  }
};
