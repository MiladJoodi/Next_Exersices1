const connectToDB =  require('./../../utils/db')

const handler = (req, res) => {
  connectToDB()
  return res.json({ message: "Welcome to next.js api routes feature :))" });
};

export default handler;
