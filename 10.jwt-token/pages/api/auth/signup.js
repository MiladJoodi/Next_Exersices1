import UserModel from "@models/User"
import connectToDB from "@configs/db"

const handler = (req, res) => {
    if (req.method !== "POST") {
        return false
    }

    try {
        connectToDB();

        const { firstname, lastname, username, email, password } = req.body

        if (
            !firstname.trim() ||
            !lastname.trim() ||
            !username.trim() ||
            !email.trim() ||
            !password.trim()
        ) {
            return res.status(422).json({message: "Data is not valid"})
        }

    } catch (err) {

    }

}

export default handler;