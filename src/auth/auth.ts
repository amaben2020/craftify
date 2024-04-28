import { PrismaAdapter } from '@auth/prisma-adapter';
import prisma from '@lib/prisma';
import NextAuth from 'next-auth';
import { Adapter } from 'next-auth/adapters';
import github from 'next-auth/providers/github';
import google from 'next-auth/providers/google';

export const { handlers, auth, signIn, signOut } = NextAuth({
  trustHost: true,
  adapter: PrismaAdapter(prisma) as Adapter,
  providers: [google, github],
});
