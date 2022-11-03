const { MessageEmbed } = require("discord.js");
const { normalizeUnits } = require("moment");
const config = require("../../botconfig/config.json");
const ee = require("../../botconfig/embed.json");
module.exports = {
  name: "ibn-ladin",
  category: "Deviants",
  aliases: [],
  cooldown: 2,
  usage: "",
  description: "Posts Videos of Osaama Bin Laadin",
  argstoomany_message: "You are having too many arguments for this Command!", //Message if the user has too many / not enough args / too many plus args, which will be sent, leave emtpy / dont add, if you wanna use command.usage or the default message! [OPTIONAL]
  run: async (client, message, args, plusArgs, cmdUser, text, prefix) => {
    const embed = new MessageEmbed()
      .setColor("#303136")
      .setTitle(`Osaama Bin Laadin Refuted`)
      .addFields({
        name: "Videos",
        value: `
        [Shaykh Ḥammād al-Anṣārī’s Encounter with the Misguided Extremist Osama bin Laden](https://youtu.be/CrlDXxLKmmc) \n
        [Shaykh Muqbil on Osama bin Laden (A MUST SEE!)](https://youtu.be/BO7BcXTc4zw)
         `,
      });

    message.channel.send({
      embeds: [embed],
    });
  },
};
