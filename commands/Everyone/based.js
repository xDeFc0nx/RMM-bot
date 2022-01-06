
const { MessageEmbed } = require("discord.js");
const { normalizeUnits } = require("moment");
const config = require("../../botconfig/config.json");
const ee = require("../../botconfig/embed.json");
module.exports = {
name: "based", 
category: "Everyone", 
aliases: [], 
cooldown: 2, 
description: "sends a meme",

run: async (client, message, args, plusArgs, cmdUser, text, prefix) => {
    message.reply("https://cdn.discordapp.com/attachments/880565815487918227/893945848545812530/islam_is_based.mov")
}}