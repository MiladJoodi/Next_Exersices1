import connectToDB from "@/configs/db";
import UserModel from "@/models/User"
import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials";

export default NextAuth({
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      name: "name_here",
      async authorize(credentials, req) {
        connectToDB()
        
        const {identifier, password} = credentials

        if(!identifier.trim() || !password.trim()){
          throw new Error("Data in not valid")
        }

        //Find User
        const user = await UserModel.findOne({
          $or: [{username: identifier}, {email: identifier}]
        })

        if(!user){
          throw new Error("User not found")
        }

        //Password Validation
        const isValidPassword = await verifyPassword(password, user.password)
        if(!isValidPassword){
          throw new Error('Username Or Password Is Not Valid')
        }

        return {email: user.email}; // Jwt Payload
      },
    }),
  ],
});

