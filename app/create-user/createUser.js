const { bot, getChatID , getUserID } = require("../bot");
const User = require("../../model/user");
module.exports = async () => {
    const user = await User.find({ userID: getUserID() });
    if(!user){

    }else{
        
    }

}