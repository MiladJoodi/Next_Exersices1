import connectToDB from "@/configs/db";
import UserModel from "@/models/User";
import { verifyPassword } from "@/utils/auth";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export default NextAuth({
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      name: "Next-Credentials",
      async authorize(credentials, req) {
        connectToDB();

        const { identifier, password } = credentials;

        if (!identifier.trim() || !password.trim()) {
          throw new Error("Data is not valid !!");
        }

        const user = await UserModel.findOne({
          $or: [{ username: identifier }, { email: identifier }],
        });

        if (!user) {
          throw new Error("User not found with this username and password !!");
        }

        const isValidPassword = await verifyPassword(password, user.password);

        if (!isValidPassword) {
          throw new Error("username or password is not valid");
        }

        return { email: user.email }; // Jwt Payload
      },
    }),
  ],
});
