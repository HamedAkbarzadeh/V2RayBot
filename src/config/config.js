import dotenv from "dotenv"

dotenv.config();

export const token = process.env.TOKEN;

export const appName = process.env.APP_NAME;
export const botUsername = process.env.BOT_USERNAME;
export const dbConnect = process.env.DB_CONNECTION;
