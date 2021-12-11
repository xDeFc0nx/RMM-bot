const config = require("../config.json");
const Discord = require("discord.js");
const client = new Discord.Client();
module.exports = {
  name: "lock", // Command Name
  aliases: ["clock"], // Aliases
  usage: " ", // Usage
  cooldown: 0, // Cooldown In Seconds
  guildOnly: false, // If Command In DMs return
  admin: false, // Bot Admin only
  mod: true,
  async execute(message, args, client) {    
      let prefix = config.prefix
      
   if (!message.member.hasPermission("MANAGE_CHANNELS")) return message.channel.send("**You don't have the permission to preform this action!**");

    
return message.channel.send(`Command not ready yet, ${message.reply}`)

  
  
  
  
  }
}