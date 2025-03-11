import { Telegraf } from "telegraf";
import { token } from "../config/config.js";
import { startCommand } from "../commands/start.js";

export const bot = new Telegraf(token);

export const setupBot = async () => {
    bot.start(startCommand);

    bot.launch()
}
