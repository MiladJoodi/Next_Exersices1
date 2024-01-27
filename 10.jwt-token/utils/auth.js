const { hash, compare } = require('bcryptjs');
import { sign } from "jsonwebtoken";

const hashPassword = async (password) => {
    const hashedPassword = await hash(password, 12);
    return hashedPassword;
}

const generateToken = (data) => {
    const token = sign({ ...data }, process.env.privateKey, {
        // algorithm:'HS256',
        expiresIn: '24h',
    });
    return token;
}

const verifyPassword = async (password, hashPassword) => {
    const isValid = await compare(password, hashPassword);
    return isValid
}

export { hashPassword, generateToken,verifyPassword };