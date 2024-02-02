import connectToDB from "@/configs/db";
import { verifyToken } from "@/utils/auth";
import UserModel from "@/models/User";

import {PrismaClient} from '@prisma/client';
const prisma = new PrismaClient();

const handler = async (req, res) => {
    if (req.method !== 'GET') {
      return false;
    }
  
    try{
      // connectToDB()

      const { token } = req.cookies;
  
      if (!token) {
        res.status(401).json({ message: "You are not login" })
      }

        //Token payload
        const tokenPayload = verifyToken(token);
        if(tokenPayload){
          // console.log("hast")
        }
        if (!tokenPayload) {
            return res.status(401).json({ message: "You are not login" })
          }

        const user = await prisma.user.findFirst({
            where:{
              email : tokenPayload.email
            },
            })

        // const user = await UserModel.findOne(
        //     {email: tokenPayload.email},
        //     "firstname lastname role"
        // )
        return res.status(200).json({data: user})
    }catch(err){
        return res
        .status(500)
        .json({message: "Unknown Internal Server Error !"})
    }
}
export default handler
