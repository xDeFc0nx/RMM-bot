
const { MessageEmbed } = require("discord.js");
const { normalizeUnits } = require("moment");
const config = require("../../botconfig/config.json");
const ee = require("../../botconfig/embed.json");
module.exports = {
name: "servervideo", 
category: "Everyone", 
description: "sends the video of the server",//Message if the user has too many / not enough args / too many plus args, which will be sent, leave emtpy / dont add, if you wanna use command.usage or the default message! [OPTIONAL]
run: async (client, message, args, plusArgs, cmdUser, text, prefix) => {

    message.reply("https://cdn.discordapp.com/attachments/880565815487918227/927906145232904212/New_Project_11_BC5C912.mp4")

}}