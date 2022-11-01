const { MessageEmbed } = require("discord.js");
const { normalizeUnits } = require("moment");
const config = require("../../botconfig/config.json");
const ee = require("../../botconfig/embed.json");
module.exports = {
  name: "nouman-ali-khan",
  category: "Deviants",
  aliases: [],
  cooldown: 2,
  usage: "",
  description: "Posts refutations of Nouman Ali Khan",
  argstoomany_message: "You are having too many arguments for this Command!", //Message if the user has too many / not enough args / too many plus args, which will be sent, leave emtpy / dont add, if you wanna use command.usage or the default message! [OPTIONAL]
  run: async (client, message, args, plusArgs, cmdUser, text, prefix) => {
    const embed = new MessageEmbed()
      .setColor("#303136")
      .setTitle(`Nouman Ali Khan Refuted`)
      .addFields({
        name: "Refutations",
        value: `
        [Debunking the NAK "Quran Expert" Scheme - Ustaadh Moosaa Richardson](https://youtu.be/LmF6ZPOck14) \n
        [Nouman Ali Khan Unveiled (Part 1) - NAK Would Rather Study Islam in America than Overseas!](https://youtu.be/Q_OsexMNCp4) \n
        [Nouman Ali Khan Unveiled (Part 2) 'That's Why We Need People Like "Shaykh" Yasir Qadhi'](https://youtu.be/gBtZuVwOm38) \n
        [Stay Far Away From Nouman ‘Ali Khān's Tafsīr | Abul-Abbās Mūsā Richardson.](https://youtu.be/0sn91EbgJwE) 
        
         `,
      });

    message.channel.send({
      embeds: [embed],
    });
  },
};
