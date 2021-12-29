const {
  MessageEmbed,
  CommandInteraction,
  MessageActionRow,
  MessageButton,
} = require("discord.js");
const { normalizeUnits } = require("moment");
const { OPENTICKET } = require("../../botconfig/config.json");
const ee = require("../../botconfig/embed.json");
module.exports = {
  name: "ticket",
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
  run: async (interaction, async) => {
    const { guild } = interaction;

    const row = new MessageActionRow().addComponents(
      new MessageButton()
        .setCustomId("button")
        .setLabel("OPEN A TICKET")
        .setStyle("SECONDARY")
        .setEmoji("📩")
    );

    const em = new MessageEmbed()
      .setTitle("to verify yourself open a ticket")
      .setDescription("To create a ticket react with 📩")
      .setColor("GREEN");

      
    await guild.channels.cache(OPENTICKET).send({ embeds: [em], components: [row] });

    interaction.reply({ content: "done", ephemeral: true });
    Console.log(interaction);
  },
};
2;
