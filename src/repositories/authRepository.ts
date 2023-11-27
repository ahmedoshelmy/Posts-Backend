import prisma from '../prismaClient';
import { hash } from 'bcrypt';

export const userExists = async (email: string) => {
  return await prisma.user.findUnique({ where: { email: email } });
};

export const createUser = async (
  email: string,
  name: string,
  password: string,
) => {
  // hashing the password
  const hashedPassword = await hash(password, process.env.SALT as string);

  // saving the user in the database

  return await prisma.user.create({
    data: {
      email,
      name,
      password: hashedPassword,
    },
  });
};
