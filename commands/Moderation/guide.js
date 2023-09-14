const { MessageActionRow, MessageButton, MessageEmbed } = require("discord.js");
const config = require("../../botconfig/config.json");
const ee = require("../../botconfig/embed.json");

module.exports = {
  name: "guide",
  category: "Moderation",
  aliases: [],
  cooldown: 2,
  description: "Sets channel slowmode",
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
    "1102471726039838791",
    "1035784971379552296",
  ],
  alloweduserids: [],
  minargs: 0,
  maxargs: 0,
  minplusargs: 0,
  maxplusargs: 0,
  argsmissing_message: "Akhi Specify a user!",
  argstoomany_message: "You are having too many arguments for this Command!",
  run: async (
    client,
    message,
    args,
    plusArgs,
    cmdUser,
    text,
    prefix,
    interaction
  ) => {
    // Create an initial embed
    const initialEmbed = new MessageEmbed()
      .setDescription("This is the initial embed with some text.")
      .setColor("#FF0000");

    // Create a new row for the button
    const row = new MessageActionRow().addComponents(
      // Create a button with the customId matching 'role' from role.js
      new MessageButton()
        .setCustomId("role")
        .setLabel("Role Info")
        .setStyle("PRIMARY")
    );

    // Send the initial embed with the "Role Info" button
    await message.reply({
      embeds: [initialEmbed],
      components: [row],
    });
  },
};
