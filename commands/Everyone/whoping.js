
const { MessageEmbed } = require("discord.js");
const { normalizeUnits } = require("moment");
const config = require("../../botconfig/config.json");
const ee = require("../../botconfig/embed.json");
module.exports = {
name: "whoping", 
category: "Everyone", 
aliases: [], 
cooldown: 2, 
usage: "", 
description: "sends a meme",
run: async (client, message, args, plusArgs, cmdUser, text, prefix) => {
message.reply("https://cdn.discordapp.com/attachments/895636011823017984/928779074338422804/WHO_PINGED_ME-fPq60AoPPlo.mp4")
}}