import mongoose from "mongoose";
import { dbConnect } from "./config.js";

export const connectToDB = () => {
    mongoose.connect(dbConnect)
        .then(() => console.log("Connected to db"))
        .catch((msg) => console.log("can not connect to db", msg));
}