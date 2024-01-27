const { hash, compare } = require('bcryptjs');
import { sign, verify } from "jsonwebtoken";

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

const verifyToken = (token) => {
    try {
        const validationResult = verify(token, process.env.privateKey)
        return validationResult;
    } catch (err) {
        console.log("Verify Token Error", err)
        return false;
    }
}



export { hashPassword, generateToken, verifyPassword, verifyToken };