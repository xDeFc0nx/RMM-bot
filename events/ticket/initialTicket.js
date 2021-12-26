const {
  ButtonInteraction,
  MessageEmbed,
  MessageActionRow,
  MessageButton,
} = require("discord.js");
const DB = require("../../structures/schemas/ticket");
const { normalizeUnits } = require("moment");
const { PARENTID, EVERYONEID } = require("../../botconfig/config.json");
const ee = require("../../botconfig/embed.json");
module.exports = {
  name: "interactionCreate",
  category: "Moderation",
  aliases: [],
  cooldown: 2,
  usage: "!ticket",
  description: "ticket system",
  memberpermissions: [],
  requiredroles: [
    "880565815123005546",
    "923708767076503552",
    "880565815123005547",
    "923710024482705518",
  ],
  alloweduserids: [],
  minplusargs: 0,
  maxplusargs: 0, // maximum args for the message, splitted with "++" , 0 == none [OPTIONAL]
  argsmissing_message: "You are missing the text you wanna add to the message!", //Message if the user has not enough args / not enough plus args, which will be sent, leave emtpy / dont add, if you wanna use command.usage or the default message! [OPTIONAL]
  argstoomany_message: "You are having too many arguments for this Command!", //Message if the user has too many / not enough args / too many plus args, which will be sent, leave emtpy / dont add, if you wanna use command.usage or the default message! [OPTIONAL]
  run: async (interaction) => {
    if (!interaction.isButton()) return;

    const { guild, member, customId } = interaction;
    if (!["button"].includes(customId)) return;
    const ID = Math.floor(Math.random() * 90000) + 10000;

    await guild.channels
      .create(`${customId + "-" + ID}`, {
        type: "GUILD_TEXT",
        parent: PARENTID,
        premissionsOverWrites: [
          {
            id: member.id,
            allow: ["SEND_MESSAGES", "VIEW_CHANNEL", "READ_MESSAGE_HISTORY"],
          },
          {
            id: EVERYONEID,
            deny: ["SEND_MESSAGES", "VIEW_CHANNEL", "READ_MESSAGE_HISTORY"],
          },
        ],
      })
      .then(async (channel) => {
        await DB.create({
          memberID: member.id,
          ticketID: ID,
          channelID: channel.id,
          Closed: false,
          Locked: false,
          type: customId,
        });

        const Embed = new MessageEmbed()
          .setAuthor(
            `${guild.name} | Ticket:${ID}`,
            guild.iconURL({ dynamic: true })
          )
          .setDescription("test test test test test");

        const Buttons = new MessageActionRow();
        Buttons.addComponents(
          new MessageButton()
            .setCustomId("close")
            .setLabel("Save & Close")
            .setStyle("GREEN")
            .setEmoji("💾"),
          new MessageButton()
            .setCustomId("lock")
            .setLabel("Lock")
            .setStyle("SECONDARY")
            .setEmoji("🔒"),
          new MessageButton()
            .setCustomId("unlock")
            .setLabel("Unlock")
            .setStyle("SUCCESS")
            .setEmoji("🔓")
        );
        channel.send({
          embeds: [Embed],
          component: [Buttons],
        });
        await channel.send({ content: `${member} test test` }).then((m) => {
          setTimeout(() => {
            m.delete().catch(() => {});
          }, 1 * 5000);
        });

        interaction.reply({
          content: `${member} your ticket blah blah: ${channel}`,
        });
      });
  },
};
