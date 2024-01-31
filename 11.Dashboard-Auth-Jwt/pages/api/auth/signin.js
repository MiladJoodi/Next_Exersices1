import UserModel from "@/models/User";
import connectToDB from "@/configs/db";
import { generateToken } from "@/utils/auth";
import { serialize } from "cookie";

const handler = async (req, res) => {
    if (req.method !== 'POST') {
        return false
    }

    try {
        connectToDB();

        const {identifier, password} = req.body

        

    } catch (err) {

    }
}