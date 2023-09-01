const { MessageEmbed } = require("discord.js");
const config = require("../../botconfig/config.json");
const ee = require("../../botconfig/embed.json");
module.exports = {
  name: "purge", //the Command Name
  category: "Moderation", //the Command Category [OPTIONAL]
  aliases: [], //the command aliases [OPTIONAL]
  cooldown: 2, //the Command Cooldown (Default in /botconfig/settings.json) [OPTIONAL]
  description: "veriffies user", //the command description [OPTIONAL]
  memberpermissions: [], //Only allow members with specific Permissions to execute a Commmand [OPTIONAL]
  requiredroles: [
    "880565815123005545",
    "880565815123005546",
    "923708767076503552",
    "880565815123005547",
    "923710024482705518",
    "1102471726039838791",
    "1035784971379552296",
    "1102471726039838791",
    "1035784971379552296",
  ], //Only allow specific Users with a Role to execute a Command [OPTIONAL]
  alloweduserids: [], //Only allow specific Users to execute a Command [OPTIONAL]
  minargs: 1, // minimum args for the message, 0 == none [OPTIONAL]
  maxargs: 0, // maximum args for the message, 0 == none [OPTIONAL]
  minplusargs: 0, // minimum args for the message, splitted with "++" , 0 == none [OPTIONAL]
  maxplusargs: 0, // maximum args for the message, splitted with "++" , 0 == none [OPTIONAL]
  argsmissing_message: "You are missing the text you wanna add to the message!", //Message if the user has not enough args / not enough plus args, which will be sent, leave emtpy / dont add, if you wanna use command.usage or the default message! [OPTIONAL]
  argstoomany_message: "You are having too many arguments for this Command!", //Message if the user has too many / not enough args / too many plus args, which will be sent, leave emtpy / dont add, if you wanna use command.usage or the default message! [OPTIONAL]
  run: async (client, message, args, plusArgs, cmdUser, text, prefix) => {
    if (!args[0]) {
      const error = new MessageEmbed()
        .setColor("RED")
        .setDescription("Specify the ammount to clear");
      message.reply({ embeds: [error] });
    }

    if (isNaN(args[0])) {
      const error1 = new MessageEmbed()
        .setColor("RED")
        .setDescription("Ya akhi it needs to be a number");
      message.reply({ embeds: [error1] });
    }

    if (args[0] > 100) {
      const error2 = new MessageEmbed()
        .setColor("RED")
        .setDescription(
          "Ya habibi that's way to much, it has to be less then 500"
        );
      message.reply({ embeds: [error2] });
    }
    if (args[0] < 1) {
      const error3 = new MessageEmbed()
        .setColor("RED")
        .setDescription(
          "What are you trying to do? add messages?, can't do that"
        );
      message.reply({ embeds: [error3] });
    }

    await message.channel.messages
      .fetch({ limit: args[0] })
      .then((messages) => {
        message.channel.bulkDelete(messages);
      });
  },
};
