const { MessageEmbed } = require("discord.js");
const { normalizeUnits } = require("moment");
const config = require("../../botconfig/config.json");
const ee = require("../../botconfig/embed.json");
module.exports = {
  name: "hamza-yusuf",
  category: "Deviants",
  aliases: [],
  cooldown: 2,
  usage: "",
  description: "Posts Videos of Hamza Yusuf",
  argstoomany_message: "You are having too many arguments for this Command!", //Message if the user has too many / not enough args / too many plus args, which will be sent, leave emtpy / dont add, if you wanna use command.usage or the default message! [OPTIONAL]
  run: async (client, message, args, plusArgs, cmdUser, text, prefix) => {
    const embed = new MessageEmbed()
      .setColor("#303136")
      .setTitle(`Hamza Yusuf Refuted`)
      .addFields({
        name: "Videos",
        value: `
        [The Saufi Hamza Yusuf: Denies that ALLĀH is above his THRONE (The way it befits his majesty)](https://youtu.be/_cMDFi-bz3M)
         `,
      });

    message.channel.send({
      embeds: [embed],
    });
  },
};
