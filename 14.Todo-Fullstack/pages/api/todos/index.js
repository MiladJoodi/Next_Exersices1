import connectToDB from "@/configs/db";
import { verifyToken } from "@/utils/auth";
import UserModel from "@/models/User";
import TodoModel from "@/models/Todo";

connectToDB();

const { token } = req.cookies;

if (!token) {
  return res.status(401).json({ message: "You are not login !!" });
}

const tokenPayload = verifyToken(token);

if (!tokenPayload) {
  return res.status(401).json({ message: "You are not login !!" });
}

const user = await UserModel.findOne({
  email: tokenPayload.email,
});


const handler = async (req, res) => {

  //Get
  if (req.method === "GET") {
    const todos = await TodoModel.find({user: user._id})

  }
  //Get


  else if (req.method === "POST") {


    const { title, isCompleted } = req.body;

    const newTodo = {
      title,
      isCompleted,
      user: user._id,
    };

    await TodoModel.create(newTodo);

    return res.status(201).json({ message: "Todo Created Successfully :))" });
  } else {
    return false;
  }
};

export default handler;
