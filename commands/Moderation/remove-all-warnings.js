const { Client, Message, MessageEmbed } = require("discord.js");
const warndb = require("../../schemas/warndb");
const { normalizeUnits } = require("moment");
const config = require("../../botconfig/config.json");
const ee = require("../../botconfig/embed.json");
module.exports = {
  name: "rwarnings",
  category: "Moderation",
  cooldown: 2,
  usage: "!warnings target user ",
  description: "Shows warnings of user",
  memberpermissions: [],
  requiredroles: [
    "880565815123005546",
    "923708767076503552",
    "880565815123005547",
    "923710024482705518",
    "1102471726039838791",
    "1035784971379552296",
    "1102471726039838791",
    "1035784971379552296",
  ],
  minargs: 1,
  maxargs: 0,
  minplusargs: 0,
  maxplusargs: 0, // maximum args for the message, splitted with "++" , 0 == none [OPTIONAL]
  argsmissing_message: "Habibi specify a user and a reason to warn!", //Message if the user has not enough args / not enough plus args, which will be sent, leave emtpy / dont add, if you wanna use command.usage or the default message! [OPTIONAL]
  run: async (client, message, args, plusArgs, cmdUser, text, prefix) => {
    const user =
      message.mentions.members.first() ||
      message.guild.members.cache.get(args[0]);
    if (!user) {
      const error = new MessageEmbed()
        .setColor("RED")
        .setDescription("User not found")
        .setFooter(
          message.member.displayName,
          message.author.displayAvatarURL({ dynamic: true })
        );
      message.channel.send({
        embeds: [error],
      });
    }

    warndb.findOne(
      {
        guild: message.guild.id,
        user: user.user.id,
      },
      async (err, data) => {
        if (err) throw err;
        if (data) {
          await db.findOneAndDelete({
            user: user.user.id,
            guild: message.guild.id,
          });
          const embed = new MessageEmbed()
            .setColor("RED")
            .setDescription("Cleared all the warnings")
            .setFooter(
              message.member.displayName,
              message.author.displayAvatarURL({ dynamic: true })
            );
          message.channel.send({
            embeds: [embed],
          });
        } else {
          const embed1 = new MessageEmbed()
            .setColor("RED")
            .setDescription("User has no warnings habibi")
            .setFooter(
              message.member.displayName,
              message.author.displayAvatarURL({ dynamic: true })
            );
          message.channel.send({
            embeds: [embed1],
          });
        }
      }
    );
  },
};
