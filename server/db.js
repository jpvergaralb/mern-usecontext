import mongoose from "mongoose";
import { MONGODB_URI_PASSWORD } from "./config.js";

export const dbConnection = async () => {
  try {
    const db = await mongoose.connect(`mongodb+srv://jpoezi:${MONGODB_URI_PASSWORD}@cluster0.psgcdja.mongodb.net/?retryWrites=true&w=majority`);
    console.log("funciona:) " + db.connection.name)
  } catch (error) {
    console.log(error.error);
  }
};
