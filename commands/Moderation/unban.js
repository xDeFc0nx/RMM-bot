const { MessageEmbed } = require("discord.js");
module.exports = {
  name: "unban", //the Command Name
  category: "Moderation", //the Command Category [OPTIONAL]
  aliases: [], //the command aliases [OPTIONAL]
  cooldown: 2, //the Command Cooldown (Default in /botconfig/settings.json) [OPTIONAL]
  usage: "ban target", //the Command usage [OPTIONAL]
  description: "Resends your Text", //the command description [OPTIONAL]
  memberpermissions: [], //Only allow members with specific Permissions to execute a Commmand [OPTIONAL]
  requiredroles: [
    "880565815123005546",
    "923708767076503552",
    "880565815123005547",
    "923710024482705518",
  ], //Only allow specific Users with a Role to execute a Command [OPTIONAL]
  alloweduserids: [], //Only allow specific Users to execute a Command [OPTIONAL]
  minargs: 1, // minimum args for the message, 0 == none [OPTIONAL]
  maxargs: 0, // maximum args for the message, 0 == none [OPTIONAL]
  minplusargs: 0, // minimum args for the message, splitted with "++" , 0 == none [OPTIONAL]
  maxplusargs: 0, // maximum args for the message, splitted with "++" , 0 == none [OPTIONAL]
  argsmissing_message: "You are missing the text you wanna add to the message!", //Message if the user has not enough args / not enough plus args, which will be sent, leave emtpy / dont add, if you wanna use command.usage or the default message! [OPTIONAL]
  argstoomany_message: "You are having too many arguments for this Command!", //Message if the user has too many / not enough args / too many plus args, which will be sent, leave emtpy / dont add, if you wanna use command.usage or the default message! [OPTIONAL]
  run: async (client, message, args, plusArgs, cmdUser, text, prefix) => {
    if (!message.member.permissions.has("BAN_MEMBERS")) {
      message.channel.send(
        "You aren't based enough to use this command [Reality "
      );
    } else {
      if (
        message.content.length >= 2 &&
        message.content.split(" ")[1].length == 18 &&
        Number(message.content.split(" ")[1])
      ) {
        message.guild.members
          .unban(message.content.split(" ")[1])
          .then((user) => {
            const embed3 = new MessageEmbed()
            .setColor("GREEN")
            .setDescription(` ${user.id} was unbanned`)
            .setFooter(message.member.displayName, message.author.displayAvatarURL({dynamic: true}))
          message.channel.send({
            embeds: [embed3],
          })
          })
          .catch((error) =>
            message.channel.send({
              embed: CreateEmbed(
                "fail",
                "Error",
                "",
                "Please use proper id for unbanning the user",
                [],
                "",
                ""
              ),
            })
          );
      } else {
        message.channel.send({
          embed: CreateEmbed(
            "fail",
            "Couldn't Unban",
            "",
            "Please provide the id as the first argument followed by the reason [Note the reason is optional]",
            [],
            "",
            ""
          ),
        });
      }
    }
  },
};
