import coursesModel from "@/models/course";
import connectToDB from "@/utils/db";

const handler = async (req, res) => {
  connectToDB();

  if (req.method === "POST") {
    try {
      const { title } = req.body;
      if (!title.trim() || title.length < 8) {
        return res.status(422).json({ message: "Title is not valid !!" });
      }
      await coursesModel.create({ title });
      return res
        .status(201)
        .json({ message: "Course created successfully :))" });
    } catch (err) {
      return res
        .status(500)
        .json({ message: "UnKnown internal server error !!" });
    }
  }
};

export default handler;
