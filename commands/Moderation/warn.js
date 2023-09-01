const { Client, Message, MessageEmbed } = require("discord.js");
const warndb = require("../../schemas/warndb");
const { normalizeUnits } = require("moment");
const config = require("../../botconfig/config.json");
const ee = require("../../botconfig/embed.json");
module.exports = {
  name: "warn",
  category: "Moderation",
  cooldown: 2,
  usage: "!warn user reason",
  description: "warns a user",
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
  argsmissing_message: "You are missing the text you wanna add to the message!", //Message if the user has not enough args / not enough plus args, which will be sent, leave emtpy / dont add, if you wanna use command.usage or the default message! [OPTIONAL]
  argstoomany_message: "You are having too many arguments for this Command!", //Message if the user has too many / not enough args / too many plus args, which will be sent, leave emtpy / dont add, if you wanna use command.usage or the default message! [OPTIONAL]
  run: async (client, message, args, plusArgs, cmdUser, text, prefix) => {
    const user =
      message.mentions.members.first() ||
      message.guild.members.cache.get(args[0]);

    if (!user) {
      const error = new MessageEmbed()
        .setColor("RED")
        .setDescription(`Specify a user habibi`)
        .setFooter(
          message.member.displayName,
          message.author.displayAvatarURL({ dynamic: true })
        );
      message.channel.send({
        embeds: [error],
      });
    }
    const reason = args.slice(1).join(" ");
    if (!reason) {
      const error1 = new MessageEmbed()
        .setColor("RED")
        .setDescription(`Habibi please specify a reason`)
        .setFooter(
          message.member.displayName,
          message.author.displayAvatarURL({ dynamic: true })
        );
      message.channel.send({
        embeds: [error1],
      });
    }
    const position = new MessageEmbed()
      .setColor("RED")
      .setDescription(
        "Akhi you cannot warn somone who is higher rank or the same rank as you"
      );

    if (user.roles.highest.position >= message.member.roles.highest.position)
      return message.reply({ embeds: [position] });

    warndb.findOne(
      {
        guild: message.guild.id,
        user: user.user.id,
      },
      async (err, data) => {
        if (err) throw err;
        if (!data) {
          data = new warndb({
            guild: message.guild.id,
            user: user.user.id,
            content: [
              {
                moderator: message.author.id,
                reason: reason,
              },
            ],
          });
        } else {
          const object = {
            moderator: message.author.id,
            reason: reason,
          };
          data.content.push(object);
        }
        data.save();
      }
    );

    const send = new MessageEmbed()
      .setColor("GREEN")
      .setDescription(
        ` ${user.toString()} Was warned, he most have said somthing`
      )
      .addField("Reason", `${reason}`)
      .setFooter(
        message.member.displayName,
        message.author.displayAvatarURL({ dynamic: true })
      );
    await message.channel.send({
      embeds: [send],
    });
  },
};
