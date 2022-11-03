const { MessageEmbed } = require("discord.js");
const { normalizeUnits } = require("moment");
const config = require("../../botconfig/config.json");
const ee = require("../../botconfig/embed.json");
module.exports = {
  name: "qaradawi",
  category: "Deviants",
  aliases: [],
  cooldown: 2,
  usage: "",
  description: "Posts Videos of Yusuf al-Qaradawi",
  argstoomany_message: "You are having too many arguments for this Command!", //Message if the user has too many / not enough args / too many plus args, which will be sent, leave emtpy / dont add, if you wanna use command.usage or the default message! [OPTIONAL]
  run: async (client, message, args, plusArgs, cmdUser, text, prefix) => {
    const embed = new MessageEmbed()
      .setColor("#303136")
      .setTitle(`Yusuf al-Qaradawi Refuted`)
      .addFields({
        name: "Videos",
        value: `
        [Yusuf al-Qaradawi refuted by Shaikh Rabee ﷾ & al-Albani (Feat: Kuffar Shia Rafidhah & Jewish Rabbis)](https://youtu.be/yGy4XmMGlAE) \n
        [Deviant Yusuf al-Qaradawi of Ikhwaanul Mufliseen & Pierre Vogel refuted by Shaikh Ubayd al-Jabiri ﷾](https://youtu.be/acq9G062I-g) \n
        [Yusuf al-Qaradawi's Kufr statements on Elections refuted by Shaikh al-Uthaymin Feat: Haitham Haddad](https://youtu.be/_qY4n8NJiZ8) \n
        [Yusuf al-Qaradawi's Fitan refuted by Shaikh al-Fawzan & Muqbil, Feat: Abu Usamah praise al-Qaradawi](https://youtu.be/rWk-yFH4LnM) \n
        [Qardhawi: "I am from the first preachers of fitnah"](https://youtu.be/b00T3j0B6Fk)
         `,
      });

    message.channel.send({
      embeds: [embed],
    });
  },
};
