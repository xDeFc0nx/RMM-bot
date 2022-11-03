const { MessageEmbed } = require("discord.js");
const { normalizeUnits } = require("moment");
const config = require("../../botconfig/config.json");
const ee = require("../../botconfig/embed.json");
module.exports = {
  name: "muhammad-as-surur",
  category: "Deviants",
  aliases: [],
  cooldown: 2,
  usage: "",
  description: "Posts Videos of Muhammad As Surur",
  argstoomany_message: "You are having too many arguments for this Command!", //Message if the user has too many / not enough args / too many plus args, which will be sent, leave emtpy / dont add, if you wanna use command.usage or the default message! [OPTIONAL]
  run: async (client, message, args, plusArgs, cmdUser, text, prefix) => {
    const embed = new MessageEmbed()
      .setColor("#303136")
      .setTitle(`Muhammad As Surur Refuted`)
      .addFields({
        name: "Videos",
        value: `
        [Shaykh Muḥammad Amān al-Jāmī: Who is Muḥammad Surūr & What is Surūrīyyah?](https://youtu.be/-b0hiYWFsoc) \n
        [[ Ar /En] Shaykh Saalih al Fawzaan on the Statements of Muhammad(https://youtu.be/HStIB0c_UCs)
         `,
      });

    message.channel.send({
      embeds: [embed],
    });
  },
};
