const mongoose = require("mongoose");

const handler = (req, res) => {
  mongoose
    .connect("mongodb://localhost:27017/next-db")
    .then(() => console.log("Connected!"))
    .catch((err)=> console.log('Error => ', err))

  return res.json({ message: "Welcome to next.js api routes feature :))" });
};

export default handler;
