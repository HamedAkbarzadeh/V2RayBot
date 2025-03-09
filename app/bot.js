const TelegramBot = require("node-telegram-bot-api");
const { token } = require("../config/config");

const bot = new TelegramBot(token, { polling: true });

let chatID, userID;

bot.on("message", (msg) => {
    console.log(msg);
    chatID = msg.chat.id;
    userID = msg.from.id;
})

module.exports = {
    getChatID: () => chatID,
    getUserID: () => userID,
    bot: bot
}
