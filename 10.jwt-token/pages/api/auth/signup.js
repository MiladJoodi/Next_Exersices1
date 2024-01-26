import UserModel from "@/models/User";
import connectToDB from "@/configs/db";

const handler = async (req, res) => {
  if (req.method !== "POST") {
    return false;
  }

  try {
    connectToDB();

    const { firstname, lastname, username, email, password } = req.body;

    // Validation
    if (
      !firstname.trim() ||
      !lastname.trim() ||
      !username.trim() ||
      !email.trim() ||
      !password.trim()
    ) {
      return res.status(422).json({ message: "Data is not valid !!" });
    }

    // isUserExist
    // HashPassword
    // GenerateToken
    // Create ✅

    await UserModel.create({
      firstname,
      lastname,
      username,
      email,
      password,
      role: "USER",
    });

    return res.status(201).json({ message: "User Created Successfully :))" });
  } catch (err) {
    return res
      .status(500)
      .json({ message: "UnKnown Internal Server Erorr !!" });
  }
};

export default handler;
