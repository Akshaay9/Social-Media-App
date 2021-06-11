import mongoose from "mongoose";
import dotenv from 'dotenv'
import colors from "colors"
dotenv.config();

const connnectToDB = async () => {
  try {
    await mongoose.connect(process.env.mongo_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
    });
      console.log("<=====DB conneted=====>".blue.underline.bold);
  } catch (error) {
    console.log(error.message.red.underline.bold); 
    process.exit(1)
  }
};

export default connnectToDB