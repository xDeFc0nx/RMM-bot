
const { MessageEmbed } = require("discord.js");
const { normalizeUnits } = require("moment");
const config = require("../../botconfig/config.json");
const ee = require("../../botconfig/embed.json");
module.exports = {
name: "blacklist", 
category: "Moderation", 
aliases: [], 
cooldown: 2, 
usage: "", 
description: "",
memberpermissions: [],
requiredroles: [
"880565815123005546",
"923708767076503552",
"880565815123005547",
"923710024482705518",
], 
alloweduserids: [], 
minargs: 1, 
maxargs: 0, 
minplusargs: 0, 
maxplusargs: 0, // maximum args for the message, splitted with "++" , 0 == none [OPTIONAL]
argsmissing_message: "You are missing the text you wanna add to the message!", //Message if the user has not enough args / not enough plus args, which will be sent, leave emtpy / dont add, if you wanna use command.usage or the default message! [OPTIONAL]
argstoomany_message: "You are having too many arguments for this Command!", //Message if the user has too many / not enough args / too many plus args, which will be sent, leave emtpy / dont add, if you wanna use command.usage or the default message! [OPTIONAL]
run: async (client, message, args, plusArgs, cmdUser, text, prefix) => {

    const blacklist = ['bad word 1', 'bad word 2', 'bad word 3']
    blacklist.forEach(word => {
        // 'word' represents an element inside of the array. 
        // Everytime the client is finished walking through an element, the value of 'word' changes to the next one!
        if (message.content.toLowerCase().includes(word)){
            message.delete()
            const error2 = new MessageEmbed()
            .setColor("RED")
            .setDescription(
              "Such Language does not fit with a beliver"
            );
          message.reply({ embeds: [error2] });
        
        }  
    })
}}