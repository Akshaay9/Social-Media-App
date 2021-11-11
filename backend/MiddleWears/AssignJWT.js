import dotenv from 'dotenv'
import jwt from "jsonwebtoken"
dotenv.config();
export default function assignJWT(id) {
    return jwt.sign({id},process.env.JWT)
}
