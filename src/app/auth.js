import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
// import { PrismaClient } from '@prisma/client';


export const {
  handlers: { GET, POST }, auth, signIn, signOut, update, } = NextAuth({
  pages: {
    signIn: "/sign-in",
     error: "/error",
  },

  providers: [GitHub],
  session: {
    strategy: "jwt",
  },
  
  secret: process.env.NEXT_PUBLIC_AUTH_SECRET
});
