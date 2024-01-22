// ES Module
// import fs from "fs";
// import path from "path";

// CommonJS
const fs = require("fs");
const path = require("path");

const handler = (req, res) => {
  switch (req.method) {
    case "GET": {
      const dbPath = path.join(process.cwd(), "data", "db.json");

      const data = fs.readFileSync(dbPath);

      const parsedData = JSON.parse(data);

      res.json(parsedData.users);
      break;
    }

    case "POST": {
      // Req.body
      const { username, email, password } = req.body;

      if (username.length < 3 || !email.trim() || password.length < 8) {
        return res.status(422).json({ message: "Data is not valid" });
      }

      const dbPath = path.join(process.cwd(), "data", "db.json");

      const data = fs.readFileSync(dbPath);

      const parsedData = JSON.parse(data);

      parsedData.users.push({
        id: crypto.randomUUID(),
        username,
        email,
        password,
      });

      const err = fs.writeFileSync(dbPath, JSON.stringify(parsedData));

      if (err) {
        // Response Codes
      } else {
        res.status(201).json({ message: "User registered successfully" });
        break;
      }
    }

    default: {
      res.json({ message: "Welcome to Users page ❤️" });
    }
  }
};

export default handler;
