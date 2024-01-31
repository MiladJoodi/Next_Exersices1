import connectToDB from "@/configs/db";
import { verifyToken } from "@/utils/auth";
import UserModel from "@/models/User";

const handler = async (req,res)=>{
    if(req.method !== 'GET'){
        return false;
    }
    try{
        connectToDB()
        const {token} = req.cookies

        if(!token){
            return res.status(401).json({message: "You are not login"})
        }

        const user = await UserModel.finOne(
            {email: tokenPayload.email},
            "firstname lastname role"
        )

    }catch(err){

    }
}