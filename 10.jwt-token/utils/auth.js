const { hash } = require('bcryptjs');
import { sign } from "jsonwebtoken";

const hashPassword = async (password) => {
    const hashedPassword = await hash(password, 12);
    return hashedPassword;
}

const generateToken = (data) => {
    const token = sign({...data}, process.env.privateKey,{
        // algorithm:'HS256',
        expiresIn: '24h',
    });
    return token;
}

export { hashPassword, generateToken };