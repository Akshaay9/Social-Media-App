import mongoose from "mongoose";
import dotenv from 'dotenv'
dotenv.config();

const connnectToDB = async () => {
  try {
    await mongoose.connect(process.env.mongo_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
    });
      console.log("<=====DB conneted=====>");
  } catch (error) {
    console.log(error.message);
    process.exit(1)
  }
};

export default connnectToDB