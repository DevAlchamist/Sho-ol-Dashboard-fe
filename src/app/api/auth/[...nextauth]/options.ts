import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";
import bcrypt from "bcryptjs";
import dbConnect from "@/lib/DbConnect";
import User from "@/lib/UserModel";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      id: "",
      name: "",
      credentials: {
        username: {
          label: "Username",
          type: "text",
          placeholder: "Username ...",
        },
        email: { label: "Email", type: "text", placeholder: "Email ..." },
        password: { label: "Password", type: "Password ..." },
      },
      async authorize(credentials: any): Promise<any> {
        const client = await dbConnect;
        const db = client.db();
        try {
          const user = await User.findOne({
            $or: [
              {
                username: credentials.identifier,
              },
            ],
          });
          if (!user) {
            throw new Error("User Not Found !");
          }
          if (!user.isVerified) {
            throw new Error("User is not verified !");
          }
          const isPasswordCorrect = await bcrypt.compare(
            credentials.password,
            user.password
          );
          if (isPasswordCorrect) {
            return user;
          } else {
            throw new Error("Wrong Password");
          }
        } catch (error: any) {
          throw new Error(error);
        }
      },
    }),
    // GitHubProvider({
    //   clientId: process.env.GITHUB_ID,
    //   clientSecret: process.env.GITHUB_SECRET,
    // }),
    // GoogleProvider({
    //   clientId: process.env.GOOGLE_CLIENT_ID,
    //   clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    // }),
  ],
  callbacks: {
    async session({ session, token }) {
      if (token) {
        session.user._id = token._id;
        session.user.isVerified = token.isVerified;
        session.user.isAcceptingMessages = token.isAcceptingMessages;
        session.user.username = token.username;
        session.user.DashboardId = token.DashboardId;
      }
      return session;
    },
    async jwt({ token, user }) {
      if (user) {
        token._id = user._id;
        token.isVerified = user.isVerified;
        token.isAcceptingMessages = user.isAcceptingMessages;
        token.username = user.username;
        token.DashboardId = user.DashboardId;
      }
      return token;
    },
  },
  pages: {
    signIn: "/auth/login",
  },
  session: {
    strategy: "jwt",
  },
  theme: {
    colorScheme: "auto", // "auto" | "dark" | "light"
    brandColor: "#4D44B5", // Hex color code
    logo: "https://i.imgur.com/k4yA8SS.png", // Absolute URL to image
  },
  secret: process.env.NEXTAUTH_SECRET,
};
