const { MessageEmbed } = require("discord.js");
const config = require("../../botconfig/config.json");
const ee = require("../../botconfig/embed.json");
module.exports = {
  name: "verify", //the Command Name
  category: "Moderation", //the Command Category [OPTIONAL]
  aliases: [], //the command aliases [OPTIONAL]
  cooldown: 2, //the Command Cooldown (Default in /botconfig/settings.json) [OPTIONAL]
  description: "verifies user", //the command description [OPTIONAL]
  memberpermissions: [], //Only allow members with specific Permissions to execute a Commmand [OPTIONAL]
  requiredroles: [
    "880565815123005545",
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
    let member = message.mentions.members.first();

    let nonVerified = message.guild.roles.cache.find(
      (r) => r.id === "881530659028496404"
    );
    let verified = message.guild.roles.cache.find(
      (r) => r.id === "881540349649113099"
    );

    const user = message.mentions.users.first();
    if (!user) {
      const error = new MessageEmbed()
        .setColor("RED")
        .setDescription("No user specified,");
      message.channel.send({ embeds: [error] });
    }
    if (user) {
      member.roles.remove(nonVerified);
      member.roles.add(verified);

      const error = new MessageEmbed()
        .setColor("GREEN")
        .setDescription("Verified " + user.toString());
      message.channel.send({ embeds: [error] });

      client.channels.cache.get("880565815487918227").send({
        content:
          user.toString() +
          " Asalmualikum Warahmatullahi Wabarakatuh, Welcome to RMM(Real Muslim Men) Please read rules in <#880565815487918221>, you can read more Everyone <#923675875831070760>,get some roles in <#880565815487918223>, and introduce yourself in <#890121772714823680> , Thanks for joining us! :slight_smile:   ",
          allowedMentions: { parse: ['users'] }
      });
    }
  },
};
