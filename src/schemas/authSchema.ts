import { object, string } from 'zod';

/**
 * @openapi
 * components:
 *  schemas:
 *    LoginRequest:
 *      type: object
 *      required:
 *        - email
 *        - password
 *      properties:
 *        email:
 *          type: string
 *          default: ahmed.helmy@qwitter.com
 *        password:
 *          type: string
 *          default: stringPassword123
 *    SignUpRequest:
 *      type: object
 *      required:
 *        - email
 *        - name
 *        - password
 *      properties:
 *        email:
 *          type: string
 *          default: ahmed@gmail.com
 *        name:
 *          type: string
 *          default: Ahmed Helmy
 *        password:
 *          type: string
 *          default: stringPassword123
 *    SignUpResponse:
 *      type: object
 *      properties:
 *        token:
 *          type: string
 *          default: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjZmNTgyOGMyLTBkYzUtNDNlMS1hZmQzLWFhODI3ZmQxODRiYSIsImlhdCI6MTY5OTI3MjE0MiwiZXhwIjoxNzA3MDQ4MTQyfQ.s4Bgs8RJr9U242CdG9cJyiVK6N7_VAVw9mziMdAkFrM
 *        message:
 *          type: string
 *          default: User created successfully
 *    LoginResponse:
 *      type: object
 *      properties:
 *        token:
 *          type: string
 *        message:
 *          type: string
 *          default: User logged in successfully
 */

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
