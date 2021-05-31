
import jwt from "jsonwebtoken"
import dotenv from 'dotenv'
dotenv.config();


export default async function privateRoute(req,res,next) {
  
        const token = req.header("auth-token")
        if (!token) {
            return res.status(400).json({ error: "un-authorized section" });
        }
    try {
        const decoded = jwt.verify(token, process.env.JWT)
        req.user = decoded
        next()
    } catch (error) {
        console.log(error);
        return res.status(500).json({ error: "Authentication error" });
    }
}