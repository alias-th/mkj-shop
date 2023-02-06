import NextAuth, { Session } from "next-auth";
import type { NextAuthOptions } from "next-auth";
import bcrypt from "bcrypt";

import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";
import CredentialsProvider from "next-auth/providers/credentials";

import User, { UserModelSchema } from "@/models/User";

import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import clientPromise from "./lib/mongodb";
import db from "@/utils/db";

db.connectDb();
export const authOptions: NextAuthOptions = {
  // Configure one or more authentication providers
  adapter: MongoDBAdapter(clientPromise),
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const email = credentials?.username;
        const password = credentials?.password;
        const user = await User.findOne({ email });
        if (user) {
          return signInUser(password, user) as any;
        } else {
          throw new Error("This email does not exist.");
        }
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    FacebookProvider({
      clientId: process.env.FACEBOOK_CLIENT_ID!,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET!,
    }),
    // ...add more providers here
  ],
  callbacks: {
    async session({ session, token }) {
      let user = await User.findById(token.sub);
      session.user.id = token.sub || user?._id.toString();
      session.user.role = user?.role || "user";
      token.role = user?.role || "user";
      return session;
    },
  },
  pages: {
    signIn: "/login",
  },
  session: {
    strategy: "jwt",
  },
  secret: process.env.JWT_SECRET,
};

async function signInUser(
  candidatePassword: string | undefined,
  candidateUser: UserModelSchema
): Promise<UserModelSchema> {
  if (!candidateUser.password) {
    throw new Error("Please enter your password.");
  }
  const testPassword = await bcrypt.compare(candidatePassword!, candidateUser.password);
  if (!testPassword) {
    throw new Error("Email or password is wrong!");
  }

  return candidateUser;
}

export default NextAuth(authOptions);
