import { setupBot } from "./src/bot/bot.js";
import { connectToDB } from './src/config/db.js';

connectToDB();
setupBot();