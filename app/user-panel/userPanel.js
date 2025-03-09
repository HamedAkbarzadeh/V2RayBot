const { bot } = require("../bot")
module.exports = () => {
    bot.onText(/\/start/, (msg, match) => {
        console.log(msg);
    })
}