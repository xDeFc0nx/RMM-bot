const { MessageEmbed } = require("discord.js");
const { normalizeUnits } = require("moment");
const config = require("../../botconfig/config.json");
const ee = require("../../botconfig/embed.json");
module.exports = {
  name: "sayyed-qutb",
  category: "Deviants",
  aliases: [],
  cooldown: 2,
  usage: "",
  description: "Posts Videos of sayyed Qutb",
  argstoomany_message: "You are having too many arguments for this Command!", //Message if the user has too many / not enough args / too many plus args, which will be sent, leave emtpy / dont add, if you wanna use command.usage or the default message! [OPTIONAL]
  run: async (client, message, args, plusArgs, cmdUser, text, prefix) => {
    const embed = new MessageEmbed()
      .setColor("#303136")
      .setTitle(`sayyed Qutb Refuted`)
      .addFields({
        name: "Videos",
        value: `
        [Refutation of Sayyid Qutb by Shaykh Ibn Bāz رحمه الله The Muftī Abdul Azīz Āl us Shaykh](https://youtu.be/oQgKopX0glQ) \n
        [Shaykh al Fawzān Warns Against The Books of Sayyid Quṭb | Shaykh Ṣāliḥ al Fawzān](https://youtu.be/dOvKL2-BNIw) \n
        [Defense Of Uthman Bin Affaan & Refutation Of Sayyid Qutb & Other Innovators](https://youtu.be/IdyaG_r2leo) \n
        [al-Albânî about Qutb, 'Abdullâh 'Azzam and al-Ikhwân al-Muslimûn](https://youtu.be/6LYAdAmUqlA) \n
        [ISIS are Nurtured Upon the Books of Sayyid Qutb](https://youtu.be/e0AcU774gtM)
         `,
      });

    message.channel.send({
      embeds: [embed],
    });
  },
};
