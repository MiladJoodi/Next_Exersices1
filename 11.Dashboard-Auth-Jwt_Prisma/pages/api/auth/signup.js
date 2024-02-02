import UserModel from "@/models/User";
import connectToDB from "@/configs/db";
import { generateToken, hashPassword } from "@/utils/auth";
import { serialize } from "cookie";

const handler = async (req, res) => {
  if (req.method !== "POST") {
    return false;
  }

  try {
    connectToDB();

    const { firstname, lastname, username, email, password } = req.body;

    if (
      !firstname.trim() ||
      !lastname.trim() ||
      !username.trim() ||
      !email.trim() ||
      !password.trim()
    ) {
      return res.status(422).json({ message: "Data is not valid" });
    }

    // isUserExist
    const isUserExist = await UserModel.findOne({
      $or: [{ username: username }, { email: email }],
    });
    if (isUserExist) {
      return res.status(422).json({ message: "This User Is Exist Already" });
    }

    // Hash Password
    const hashedPassword = await hashPassword(password);

    //Token
    const token = generateToken({email:email})
    // console.log(token)

    //Admin First
    const users = await UserModel.find({})

       // Create Model
       await UserModel.create({
        firstname,
        lastname,
        username,
        email,
        password: hashedPassword,
        role: users.length > 0 ? "USER" : "ADMIN"
      });
  
      return res
      .setHeader("Set-Cookie", serialize("token", token, {
        httpOnly: true,
        path: "/",
        maxAge: 60 * 60 * 24
      }))
      .status(201)
      .json({ message: "User Created Successfully :))" });
  
    } catch (err) {
      return res
        .status(500)
        .json({ message: "UnKnown Internal Server Erorr !!" });
    }
  };
  
  export default handler;
