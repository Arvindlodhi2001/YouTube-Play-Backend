import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async (req, res) => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    );
    console.log(
      `MongoDB Connection !!! DB HOST ${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.log("Error in DataBase Connection -->", error);
    process.exit(1);
  }
};

export default connectDB;