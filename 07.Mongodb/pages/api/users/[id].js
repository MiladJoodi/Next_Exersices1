import usersModel from "@/models/user";
import connectToDB from "@/utils/db";
import fs from "fs";
import path from "path";

const handler = async (req, res) => {
  connectToDB();

  if (req.method === "GET") {
    const { id: email } = req.query;

    // const user = await usersModel.find({ email }); // => [...]
    const user = await usersModel.findOne({ email }); // => {...}

    if (user) {
      return res.json(user);
    } else {
      return res.status(404).json({ message: "User not found !!" });
    }
  } else if (req.method === "DELETE") {
    const { id } = req.query;

    const deletedUser = await usersModel.findOneAndDelete({ _id: id });

    console.log(deletedUser);

    if (deletedUser) {
      return res.status(200).json({ message: "User removed successfully :))" });
    }
  } else if (req.method === "PUT") {
    const { id } = req.query;
    const { username, email, password } = req.body;

    const updatedUser = await usersModel.findOneAndUpdate(
      { _id: id },
      {
        username,
        email,
        password,
      }
    );

    if (updatedUser) {
      return res.json({ message: "User updated successfully :))" });
    }
  }
};

export default handler;
