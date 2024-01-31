import UserModel from "@/models/User";
import connectToDB from "@/configs/db";
import { hashPassword } from "@/utils/auth";

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

    //Hash Password
    const hashedPassword = await hashPassword(password);

    await UserModel.create({
      firstname,
      lastname,
      username,
      email,
      password: hashedPassword,
      role: "USER",
    });
    return res.status(201).json({ message: "User Created Successfully" });
  } catch (err) {
    return res.status(500).json({ message: "Unknown Internal Server Error" });
  }
};

export default handler;
