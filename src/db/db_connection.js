import mongoose from "mongoose";
import { DB_NAME } from "../utils/constants.js"
import { MONGODB_URI } from "../utils/env.js";


const connectDB = async () => {
        try{
               const conn = await mongoose.connect(`${MONGODB_URI}/${DB_NAME}`)
               console.log(`MongoDB connected: ${conn.connection.host}`);
            }
            catch(err)
            {
                console.log("MongoDB connection failed", err);
                process.exit(1);
            }
}    

export default connectDB;