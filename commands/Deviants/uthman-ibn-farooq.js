const { MessageEmbed } = require("discord.js");
const { normalizeUnits } = require("moment");
const { set } = require("mongoose");
const config = require("../../botconfig/config.json");
const ee = require("../../botconfig/embed.json");
module.exports = {
  name: "uthman-ibn-farooq",
  category: "Deviants",
  aliases: [],
  cooldown: 2,
  usage: "",
  description: "Posts refutations of Uthman Ibn Farooq",
  argstoomany_message: "You are having too many arguments for this Command!", //Message if the user has too many / not enough args / too many plus args, which will be sent, leave emtpy / dont add, if you wanna use command.usage or the default message! [OPTIONAL]
  run: async (client, message, args, plusArgs, cmdUser, text, prefix) => {
    const embed = new MessageEmbed()
      .setColor("#303136")
      .setTitle(`Uthman Ibn Farooq Refuted`)
      .addFields({
        name: "Refutations",
        value: `
        [Shaykh Uthman Ibn Farooqs Self-Contradiction](https://youtu.be/5CfgMSANCZA) \n
        [Clarifying Aqeedah & Manhaj Is Neither DRAMA or POLITICS | Shamsi](https://youtu.be/d5HS_wZfhMA) \n
        [Uthman ibn Farooq "This is Nifaq!" | Shamsi](https://youtu.be/wC6wucp_Ppg) \n
         `,
      })
      .setImage(
        "https://cdn.discordapp.com/attachments/1034934180162830347/1035740137075769456/IMG_20220606_210252.jpg"
      );

    message.channel.send({
      embeds: [embed],
    });
  },
};
