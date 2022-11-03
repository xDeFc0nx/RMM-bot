const { MessageEmbed } = require("discord.js");
const { normalizeUnits } = require("moment");
const config = require("../../botconfig/config.json");
const ee = require("../../botconfig/embed.json");
module.exports = {
  name: "zakir-naik",
  category: "Deviants",
  aliases: [],
  cooldown: 2,
  usage: "",
  description: "Posts Videos of Zakir Naik",
  argstoomany_message: "You are having too many arguments for this Command!", //Message if the user has too many / not enough args / too many plus args, which will be sent, leave emtpy / dont add, if you wanna use command.usage or the default message! [OPTIONAL]
  run: async (client, message, args, plusArgs, cmdUser, text, prefix) => {
    const embed = new MessageEmbed()
      .setColor("#303136")
      .setTitle(`Zakir Naik Refuted`)
      .addFields({
        name: "Videos",
        value: `
        [Zakir Naik Refuted By Abu Khadeejah](https://youtu.be/elalt7eYCsc) \n 
        [Zakir Naik and Huda TV Director Supporting Harun Yahya](https://youtu.be/uj-Xmex4-mE)\n
        [Zakir Naik Permits Suicide As War Tactic Even Today - Refuted By Shaykh Ibn ʿUthaymīn](https://youtu.be/N20NOsMiPNk)
         `,
      });

    message.channel.send({
      embeds: [embed],
    });
  },
};
