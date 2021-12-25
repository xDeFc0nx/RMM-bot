
const { MessageEmbed } = require("discord.js");
const { normalizeUnits } = require("moment");
const config = require("../../botconfig/config.json");
const ee = require("../../botconfig/embed.json");
module.exports = {
name: "jzk", 
category: "Everyone", 
aliases: [], 
cooldown: 2, 
usage: "", 
description: "",
run: async (client, message, args, plusArgs, cmdUser, text, prefix) => {
    message.channel.send("Jazakumullahu khairan")
    
}}