// ES Module
// import fs from "fs";
// import path from "path";
import connectToDB from "@/utils/db";
import usersModel from "@/models/user";

// CommonJS
const fs = require("fs");
const path = require("path");

const handler = async (req, res) => {
  connectToDB();

  switch (req.method) {
    case "GET": {
      // const users = await usersModel.find();
      const users = await usersModel.find({});

      res.json(users);
      break;
    }

    case "POST": {
      // Req.body
      const { username, email, password } = req.body;

      if (username.length < 3 || !email.trim() || password.length < 8) {
        return res.status(422).json({ message: "Data is not valid" });
      }

      const user = await usersModel.create({ username, email, password });

      console.log(user);

      if (user) {
        return res
          .status(201)
          .json({ message: "User registered successfully" });
      } else {
        return res.status(409).json({ message: "Unknown Error !!" });
      }
    }

    default: {
      res.json({ message: "Welcome to Users page ❤️" });
    }
  }
};

export default handler;
