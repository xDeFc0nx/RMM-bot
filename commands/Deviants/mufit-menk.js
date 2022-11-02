const { MessageEmbed } = require("discord.js");
const { normalizeUnits } = require("moment");
const config = require("../../botconfig/config.json");
const ee = require("../../botconfig/embed.json");
module.exports = {
  name: "mufti-menk",
  category: "Deviants",
  aliases: [],
  cooldown: 2,
  usage: "",
  description: "Posts Videos of Mufti menk",
  argstoomany_message: "You are having too many arguments for this Command!", //Message if the user has too many / not enough args / too many plus args, which will be sent, leave emtpy / dont add, if you wanna use command.usage or the default message! [OPTIONAL]
  run: async (client, message, args, plusArgs, cmdUser, text, prefix) => {
    const embed = new MessageEmbed()
      .setColor("#303136")
      .setTitle(`"Mufti" Menk Refuted`)
      .addFields({
        name: "Videos",
        value: `["Mufti" Menk's Confused Ummah - Falsehood & Misguidance Refuted - Hypocrisy Exposed](https://youtu.be/xtgiuYppgY4) \n
         [The Da’wah Style Applied by “Mufti” Menk & the Likes, in a Nutshell! - Hasan as-Somali](https://youtu.be/na_c-C_vmQc) \n
         [Warning Against "Mufti" Menk & the Internet Shuyookh - Abu 'Iyaad Amjad Rafiq & Abdulilah Lahmami](https://youtu.be/mNVj8W9nYSU) \n
         ["Mufti" Menk: You can be a Homosexual and choose any Religion you like](https://youtu.be/7maXUVjS_ZI)`,
      });

    message.channel.send({
      embeds: [embed],
    });
  },
};
