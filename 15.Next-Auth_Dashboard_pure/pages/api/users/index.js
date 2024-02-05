import { getSession } from "next-auth/react";
import UserModel from "@/models/User";
import connectToDB from "@/configs/db";

const handler = async (req, res) => {
  if (req.method !== "GET") {
    return false;
  }

  connectToDB();

  const session = await getSession({ req });

  if (!session) {
    return res.status(401).json({ message: "You are not authenticated !!" });
  }

  const user = await UserModel.findOne({ email: session.user.email }, "role");

  if (user?.role !== "ADMIN") {
    return res
      .status(401)
      .json({ message: "This Api is protect and You not access to it !!" });
  }

  return res.json({ message: "User removed successfully :))" });

  // Codes
};

export default handler;
