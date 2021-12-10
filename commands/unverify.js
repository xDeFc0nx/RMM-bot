const config = require("../config.json");
const Discord = require("discord.js");
const client = new Discord.Client();
module.exports = {
  name: "unverify", // Command Name
  aliases: ["bm"], // Aliases
  usage: "<user>", // Usage
  cooldown: 0, // Cooldown In Seconds
  guildOnly: false, // If Command In DMs return
  admin: false, // Bot Admin only
  mod: true,
  async execute(message, args, client) {    
      let prefix = config.prefix

      let member = message.mentions.members.first();
      let nonVerified = message.guild.roles.cache.find(r => r.id === "881530659028496404");
      let verified = message.guild.roles.cache.find(r => r.id === "881540349649113099");
     
      const user = message.mentions.users.first()
if (!user) {
    message.reply('No User specified')
    
}
if (user){
  
  member.roles.remove(verified);
  member.roles.add(nonVerified);
  message.channel.send('Un Verified ' + user.toString())
         
        }
   
   

  }
}
