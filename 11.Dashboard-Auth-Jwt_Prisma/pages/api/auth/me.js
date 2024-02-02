import connectToDB from "@/configs/db";
import { verifyToken } from "@/utils/auth";
import UserModel from "@/models/User";

const handler = async (req, res) => {
    if (req.method !== 'GET') {
      return false;
    }
  
    try{
      // connectToDB()

      const { token } = req.body;
      // console.log(token)
  
      if (!token) {
        res.status(401).json({ message: "You are not login" })
      }

        //Token payload
        const tokenPayload = verifyToken(token);
        if (!tokenPayload) {
            return res.status(401).json({ message: "You are not login" })
          }
        // console.log(tokenPayload)

        const user = await prisma.user.findFirst({
            where:{
              email : tokenPayload.email
            },
            })
        console.log("user finded")

        // const user = await UserModel.findOne(
        //     {email: tokenPayload.email},
        //     "firstname lastname role"
        // )
        // return res.status(200).json({data: user})
    }catch(err){
        return res
        .status(500)
        .json({message: "Unknown Internal Server Error !"})
    }
}
export default handler
