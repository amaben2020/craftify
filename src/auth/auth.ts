import { PrismaAdapter } from '@auth/prisma-adapter';
import { PrismaClient } from '@prisma/client';
import NextAuth from 'next-auth';
import github from 'next-auth/providers/github';
import google from 'next-auth/providers/google';

const prisma = new PrismaClient();

export const { handlers, auth, signIn, signOut } = NextAuth({
  trustHost: true,
  adapter: PrismaAdapter(prisma),
  providers: [google, github],
});
