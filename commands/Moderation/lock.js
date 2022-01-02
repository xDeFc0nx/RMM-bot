
const { MessageEmbed } = require("discord.js");
const { normalizeUnits } = require("moment");
const config = require("../../botconfig/config.json");
const ee = require("../../botconfig/embed.json");
module.exports = {
name: "lock", 
category: "Moderation", 
cooldown: 2, 
description: "locks channel",
requiredroles: [
"880565815123005546",
"923708767076503552",
"880565815123005547",
"923710024482705518",
], 
minargs: 0, 
maxargs: 0, 
minplusargs: 0, 
maxplusargs: 0, // maximum args for the message, splitted with "++" , 0 == none [OPTIONAL]
argsmissing_message: "You are missing the text you wanna add to the message!", //Message if the user has not enough args / not enough plus args, which will be sent, leave emtpy / dont add, if you wanna use command.usage or the default message! [OPTIONAL]
argstoomany_message: "You are having too many arguments for this Command!", //Message if the user has too many / not enough args / too many plus args, which will be sent, leave emtpy / dont add, if you wanna use command.usage or the default message! [OPTIONAL]
run: async (client, message, args, plusArgs, cmdUser, text, prefix) => {

    let verified = message.guild.roles.cache.find(
        (r) => r.id === "881540349649113099"
      );

message.channel.permissionOverwrites.edit(verified,{ 'SEND_MESSAGES': false })

await message.delete();
const send = new MessageEmbed()
    .setColor("GREEN")
    .setDescription(`Channel has been locked`)
    .setFooter(message.member.displayName, message.author.displayAvatarURL({dynamic: true}))
  message.channel.send({
    embeds: [send],
  });
}}