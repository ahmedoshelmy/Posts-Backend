// Make sure to import the prisma client from this file ONLY to avoid creating multiple connections with the database
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
export default prisma;
