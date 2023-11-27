import { object, string } from 'zod';

// I assumed that the password Confirmation step is done in the front end
export const PostSchema = object({
  body: object({
    title: string().min(1).max(50),
    content: string().min(1),
  }),
});
