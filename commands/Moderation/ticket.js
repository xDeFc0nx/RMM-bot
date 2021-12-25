const { MessageEmbed, MessageActionRow, MessageButton } = require("discord.js");
const { normalizeUnits } = require("moment");
const config = require("../../botconfig/config.json");
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
  run: async (client, message, args, plusArgs, cmdUser, text, prefix) => {
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
    const m = await  message.channel.send({ embeds: [em], components: [row] });
        
    const iFilter = i => i.user.id;

  const collector =  m.createMessageComponentCollector({ filter: iFilter, time: 60000})

  collector.on('collect', async i =>{
    //   const name = (`Verification-${}`)
          message.guild.channels.create(name, { parent: "881547424538165268" })
  })
},
};
2