const { MessageEmbed } = require("discord.js");
const { normalizeUnits } = require("moment");
const config = require("../../botconfig/config.json");
const ee = require("../../botconfig/embed.json");
module.exports = {
  name: "omar-suleyman",
  category: "Deviants",
  aliases: [],
  cooldown: 2,
  usage: "",
  description: "Posts Videos of Omar Suleiman ",
  argstoomany_message: "You are having too many arguments for this Command!", //Message if the user has too many / not enough args / too many plus args, which will be sent, leave emtpy / dont add, if you wanna use command.usage or the default message! [OPTIONAL]
  run: async (client, message, args, plusArgs, cmdUser, text, prefix) => {
    const embed = new MessageEmbed()
      .setColor("#303136")
      .setTitle(`Omar Suleiman  Refuted`)
      .addFields({
        name: "Videos",
        value: `
        [Misguiding The Ummah: Omar Suleiman Refuted, A Sign Of The Hour - The LGBTQ Liberal Muslim Alliance](https://youtu.be/ULRo341yYkY)
         `,
      });

    message.channel.send({
      embeds: [embed],
    });
  },
};
