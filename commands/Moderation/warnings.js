const { Client, Message, MessageEmbed } = require("discord.js");
const warndb = require("../../schemas/warndb");
const { normalizeUnits } = require("moment");
const config = require("../../botconfig/config.json");
const ee = require("../../botconfig/embed.json");
module.exports = {
  name: "warnings",
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
    const user = message.mentions.members.first() || message.author.id;

    warndb.findOne(
      {
        guild: message.guild.id,
        user: user.id,
      },
      async (err, data) => {
        if (err) throw err;
        if (data) {
          const e = data.content.map(
            (w, i) =>
              `\n\`${i + 1}\` - Moderator: ${
                message.guild.members.cache.get(w.moderator).user.tag
              }, Reason: ${w.reason}`
          );
          if (e.length < 1) {
            const embed1 = new MessageEmbed()
              .setColor("GREEN")
              .setDescription(user.toString() + `Has no warnings alhamdulilah`)
              .setFooter(
                message.member.displayName,
                message.author.displayAvatarURL({ dynamic: true })
              );
            message.channel.send({
              embeds: [embed1],
            });
          } else {
            const embed1 = new MessageEmbed()
              .setColor("DARK_RED")
              .setDescription(e.join(" "))
              .setFooter(
                message.member.displayName,
                message.author.displayAvatarURL({ dynamic: true })
              );
            message.channel.send({
              embeds: [embed1],
            });
          }
        } else {
          const embed2 = new MessageEmbed()
            .setColor("GREEN")
            .setDescription(user.toString() + `Has no warnings alhamdulilah`)
            .setFooter(
              message.member.displayName,
              message.author.displayAvatarURL({ dynamic: true })
            );
          message.channel.send({
            embeds: [embed2],
          });
        }
      }
    );
  },
};
