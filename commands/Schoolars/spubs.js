const { MessageEmbed } = require("discord.js");
const { normalizeUnits } = require("moment");
const config = require("../../botconfig/config.json");
const ee = require("../../botconfig/embed.json");
module.exports = {
  name: "spubs",
  category: "Schoolars",
  aliases: [],
  cooldown: 2,
  usage: "",
  description: "Posts videos defending spubs[Salafi publications]",
  argstoomany_message: "You are having too many arguments for this Command!", //Message if the user has too many / not enough args / too many plus args, which will be sent, leave emtpy / dont add, if you wanna use command.usage or the default message! [OPTIONAL]
  run: async (client, message, args, plusArgs, cmdUser, text, prefix) => {
    const embed = new MessageEmbed()
      .setColor("#303136")
      .setTitle(`Defending Salafi Publications`)
      .addFields({
        name: "Videos",
        value: `
          [DO I Have To Take Knowledge From Spubs To Be Salafi](https://youtu.be/aPBxH2uIz5Y) \n
          [Are The Issues Between Green Lane Mosque And Masjid As-Salafi Personal? - Abu Khadeejah Abdul-Waahid](https://youtu.be/HlaogNVLPj8) \n
[[Reminder] Shaykh Rabee' حفظه الله advice to the Salafis](https://youtu.be/T8NaOC6_S4I) \n
[The Praise of Shaykh Ḥasan ibn ʿAbd al-Wahhāb al-Banná For The Salafī Da’wah That He Witnessed...](https://youtu.be/Weq_5CyS4Uk) \n
[Shaykh ‘Ubayd al-Jābirī about Salafi Publications](https://youtu.be/9JfHq48Dl0k) \n
[Shaykh Ḥassan al-Bannā praising Maktabah Salafiyyah in Birmingham](https://youtu.be/kE5Ky6sOGxg) \n
[Praises of The Scholars for Salafi Publication - Ustādh Abu Inaayah Seif](https://youtu.be/y9Bikphnoqk) \n
[Watch the whole playlist with 28 videos here](https://www.youtube.com/playlist?list=PLb0NYMWhUYpt59Lv-cKkguRUpN-8thoSq) \n
         `,
      });

    message.channel.send({
      embeds: [embed],
    });
  },
};
