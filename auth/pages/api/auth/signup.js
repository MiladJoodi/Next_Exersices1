import connectToDB from "@/configs/db";

const handler = async (req, res) => {
    if (req.method !== "POST") {
      return false;
    }
    connectToDB();

    const { firstname, lastname, username, email, password } = req.body;

    

}

export default handler;
