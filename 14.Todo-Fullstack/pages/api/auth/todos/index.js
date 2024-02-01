import connectToDB from "@/configs/db";
import { verifyToken } from "@/utils/auth";
import UserModel from "@/models/User"
import TodoModel from "@/models/Todo"

const handler = async (res, req) => {


    if(req.method === 'GET'){
        //code=> Get all todos


    }else if(req.method === 'POST'){
        //code=> Create new todo
        
        connectToDB()

        const { token } = req.cookies;
      
        if (!token) {
          res.status(401).json({ message: "You are not login" })
        }
      
        const tokenPayload = verifyToken(token);
      
        if (!tokenPayload) {
          return res.status(401).json({ message: "You are not login" })
        }

        const user = await UserModel.findOne(
            { email: tokenPayload.email }
          )

          //create cookie

          const {title, isCompleted} = req.body

          const newTodo = {
            title,
            isCompleted,
            user: user._id
          }
          
          await TodoModel.create(newTodo)
          return res.status(201).json({message: "Todo Successfully"})

    }else{
        return false
    }
}

export default handler