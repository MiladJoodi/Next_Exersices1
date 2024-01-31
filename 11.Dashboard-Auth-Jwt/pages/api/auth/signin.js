import UserModel from "@/models/User";
import connectToDB from "@/configs/db";
import { generateToken } from "@/utils/auth";
import { serialize } from "cookie";

const handler = async (req, res) => {
    if (req.method !== 'POST') {
        return false
    }

    try {
        connectToDB();

        const { identifier, password } = req.body

        // Not Empty Validation
        if(
            !identifier.trim() ||
            !password.trim()
        ){
            return res.status(422).json({message: "Data is not valid"})
        }
        
       //Check and Find Username or Email 
        const user = await UserModel.findOne({
            $or: [{username: identifier}, {email:identifier}]
        })
        if(!user){
            return res.status(404).json({message: "User Not Found"})
        }



    } catch (err) {

    }
}
export default handler;