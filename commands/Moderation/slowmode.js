const { MessageEmbed } = require("discord.js");
const config = require("../../botconfig/config.json");
const ee = require("../../botconfig/embed.json");
module.exports = {
  name: "slowmode", //the Command Name
  category: "Moderation", //the Command Category [OPTIONAL]
  aliases: [], //the command aliases [OPTIONAL]
  cooldown: 2, //the Command Cooldown (Default in /botconfig/settings.json) [OPTIONAL]
  description: "sets channel slowmode", //the command description [OPTIONAL]
  memberpermissions: [], //Only allow members with specific Permissions to execute a Commmand [OPTIONAL]
  requiredroles: ["880565815123005545","880565815123005546","923708767076503552","880565815123005547","923710024482705518",], //Only allow specific Users with a Role to execute a Command [OPTIONAL]
  alloweduserids: [], //Only allow specific Users to execute a Command [OPTIONAL]
  minargs: 1, // minimum args for the message, 0 == none [OPTIONAL]
  maxargs: 0, // maximum args for the message, 0 == none [OPTIONAL]
  minplusargs: 0, // minimum args for the message, splitted with "++" , 0 == none [OPTIONAL]
  maxplusargs: 0, // maximum args for the message, splitted with "++" , 0 == none [OPTIONAL]
  argsmissing_message: "You are missing the text you wanna add to the message!", //Message if the user has not enough args / not enough plus args, which will be sent, leave emtpy / dont add, if you wanna use command.usage or the default message! [OPTIONAL]
  argstoomany_message: "You are having too many arguments for this Command!", //Message if the user has too many / not enough args / too many plus args, which will be sent, leave emtpy / dont add, if you wanna use command.usage or the default message! [OPTIONAL]
  run: async (client, message, args, plusArgs, cmdUser, text, prefix) => {
    const amount = parseInt(args[0]);
    if (isNaN(amount)){

    const error = new MessageEmbed()
    .setColor("RED")
    .setDescription("You have to set a number habibi");
    message.channel.send({ embeds: [error] })
   
    
    }



    if (args[0] === amount + "s") {
      message.channel.setRateLimitPerUser(amount);
      if (amount > 0) {
        const rembed = new MessageEmbed()
          .setColor("GREEN")
          .setDescription(`Set slowmode to ${amount}s`);
        message.channel.send({ embeds: [rembed] });
      } else {
        const error1 = new MessageEmbed()
        .setColor("RED")
        .setDescription( "habibi You can only set seconds(s),");
      message.channel.send({ embeds: [error1] });
      
      }
    }
  },
};
