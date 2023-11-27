import { Response, NextFunction } from 'express';
import { JwtPayload, verify } from 'jsonwebtoken';
import prisma from '../prismaClient';
import { User } from '@prisma/client';
import { AuthenticatedRequest } from '../types/Request';

export const isLoggedIn = async (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction,
) => {
  try {
    // Checking if the token is verified.
    const auth_header: string = req.headers.authorization as string;

    if (!auth_header || !auth_header.startsWith('Bearer')) {
      return res.status(401).json({ message: 'Unauthorized access' });
    }
    const token: string = auth_header.split(' ')[1];
    const payloadData = verify(token, process.env.JWT_SECRET as string);
    if (!(payloadData as JwtPayload).id) {
      return res.status(409).json({ message: 'Invalid access credentials' });
    }
    if (
      ((payloadData as JwtPayload).exp as number) <=
      parseInt((Date.now() / 1000).toString())
    ) {
      return res.status(409).json({ message: 'Token Expired' });
    }
    const user = await prisma.user.findFirst({
      where: {
        id: (payloadData as JwtPayload).id,
      },
    });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    req.user = user as User;
    return next();
  } catch (err) {
    return res.status(401).json({ message: 'Invalid Token', error: err });
  }
};
