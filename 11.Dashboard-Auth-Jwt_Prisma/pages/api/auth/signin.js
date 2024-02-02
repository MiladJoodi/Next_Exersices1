import UserModel from "@/models/User";
import connectToDB from "@/configs/db";
import { generateToken,verifyPassword } from "@/utils/auth";
import { serialize } from "cookie";

import {PrismaClient} from '@prisma/client';
const prisma = new PrismaClient();

const handler = async (req, res) => {
    if (req.method !== 'POST') {
        return false
    }
    try {

        const { identifier, password } = req.body

        // Not Empty Validation
        if(
            !identifier.trim() ||
            !password.trim()
        ){
            return res.status(422).json({message: "Data is not valid"})
        }
        
       //Check and Find Username or Email 
       const user = await prisma.user.findFirst({
        where:{
            OR:[
                {username: identifier},
                {email: identifier}
            ]
        }
       })
        if(!user){
            return res.status(404).json({message: "User Not Found"})
        }

        //Password Validation
        const isValidPassword = await verifyPassword(password, user.password)
        if(!isValidPassword){
            return res.status(422).json({message: 'username or password is not valid'})
        }

        const token = generateToken({email: user.email})
        
        return res
        .setHeader("Set-Cookie", serialize("token", token, {
          httpOnly: true,
          path: "/",
          maxAge: 60 * 60 * 24
        }))
        .status(200)
        .json({ message: "User Logged in Successfully :))" });
    
      } catch (err) {
          return res
          .status(500)
          .json({message: "Unknown Internal Server Error"})
      }
    
    };
    
export default handler;