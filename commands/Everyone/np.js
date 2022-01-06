
const { MessageEmbed } = require("discord.js");
const { normalizeUnits } = require("moment");
const config = require("../../botconfig/config.json");
const ee = require("../../botconfig/embed.json");
module.exports = {
name: "np", 
category: "Everyone", 
description: "sends a meme, translation, no problem",//Message if the user has too many / not enough args / too many plus args, which will be sent, leave emtpy / dont add, if you wanna use command.usage or the default message! [OPTIONAL]
run: async (client, message, args, plusArgs, cmdUser, text, prefix) => {

    message.reply("https://cdn.discordapp.com/attachments/880565815722770453/901054277689172048/meme.mp4")

}}