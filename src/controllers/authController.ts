import { User } from '@prisma/client';
import { Request, Response, NextFunction } from 'express';
import { createUser, userExists } from '../repositories/authRepository';
import { sign } from 'jsonwebtoken';
import { hash } from 'bcrypt';

export const register = async (
  req: Request,
  res: Response,
  _next: NextFunction,
) => {
  let { email, password, name } = req.body as User;

  // Making the email lower case
  email = email.toLowerCase();

  // Checking that the user doesn't exist

  const oldUser = await userExists(email);
  if (oldUser) {
    return res.status(401).json({
      message: 'Email already exists',
    });
  }

  const user = await createUser(email, name, password);
  const token = sign({ id: user.id }, process.env.JWT_SECRET as string, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
  return res.status(201).json({
    message: 'User created',
    token,
  });
};
export const login = async (
  req: Request,
  res: Response,
  _next: NextFunction,
) => {
  let { email, password } = req.body as User;

  // Making the email lower case
  email = email.toLowerCase();

  // Checking that the user exist

  const user = await userExists(email);
  if (!user) {
    return res.status(401).json({
      message: 'Email does not exist',
    });
  }

  // Checking that the password matches

  const hashedPassword = await hash(password, process.env.SALT as string);

  if (hashedPassword !== user.password) {
    return res.status(401).json({
      message: 'Wrong email or password',
    });
  }

  const token = sign({ id: user.id }, process.env.JWT_SECRET as string, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
  return res.status(200).json({
    message: 'User logged in',
    token,
  });
};
