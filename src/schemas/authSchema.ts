import { object, string } from 'zod';

// I assumed that the password Confirmation step is done in the front end
export const signUpSchema = object({
  body: object({
    name: string().min(1).max(50),
    email: string().email(),
    password: string().min(8),
  }),
});

const loginPayloadSchema = object({
  body: object({
    email: string(),
    password: string(),
  }),
});

export const loginSchema = loginPayloadSchema;
