import express from "express";
import cors from "cors";
import dbConnection from "./DB.js";
import dotenv from "dotenv";
import UserLoginSignup from "./Routes/UserRoute.js"
const app = express();
app.use(express.json());
app.use(cors());
dotenv.config();

dbConnection();

const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`server started on port ${PORT}`.yellow.underline.bold)
);

// routes
app.use(`/api/user`,UserLoginSignup)



// custome err handeling
app.use((err, req, res, next) => {
    console.log(err);
    res.json({
      message: err.message,
      stack: process.env.NODE_ENV === "production" ? null : err.stack,
    });
  });
  // 404 handling
  app.use("*", function (req, res) {
    return res.status(400).json({ error: "Page Not Found" });
  });