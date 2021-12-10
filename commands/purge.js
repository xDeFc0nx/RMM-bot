const config = require("../config.json");
const Discord = require("discord.js");
const client = new Discord.Client();
module.exports = {
  name: "purge", // Command Name
  aliases: ["bm"], // Aliases
  usage: "<user>", // Usage
  cooldown: 0, // Cooldown In Seconds
  guildOnly: false, // If Command In DMs return
  admin: false, // Bot Admin only
  mod: true,
  async execute(message, args, client) {    
      let prefix = config.prefix

   if(!args[0]) return message.reply("Specify the ammount to clear");
   if(isNaN(args[0]) ) return message.reply("Ya akhi it needs to be a number");

   if(args[0] > 500) return message.reply("Ya habibi that's way to much, it has to be less then 500");
   if(args[0] < 1) return message.reply("What are you trying to do? add messages?, can't do that")

    await message.channel.messages.fetch({limit: args[0]}).then(messages =>{
        message.channel.bulkDelete(messages);
    })

  }
}
