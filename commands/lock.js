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
      
  

    
return  message.reply("Habibi this command is not yet ready, have sabr.")

  
  
  
  
  }
}