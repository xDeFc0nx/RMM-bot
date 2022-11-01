const { MessageEmbed } = require("discord.js");
const { normalizeUnits } = require("moment");
const config = require("../../botconfig/config.json");
const ee = require("../../botconfig/embed.json");
module.exports = {
  name: "mohammad-hijab",
  category: "Deviants",
  aliases: [],
  cooldown: 2,
  usage: "",
  description: "Posts refutations of Mohammad hijab",
  argstoomany_message: "You are having too many arguments for this Command!", //Message if the user has too many / not enough args / too many plus args, which will be sent, leave emtpy / dont add, if you wanna use command.usage or the default message! [OPTIONAL]
  run: async (client, message, args, plusArgs, cmdUser, text, prefix) => {
    const embed = new MessageEmbed()
      .setColor("#303136")
      .setTitle(`Mohammad hijab Refuted`)
      .addFields({
        name: "Refutations",
        value: `[Mohammed Hijab - Biting The Hand That Fed Him | Shamsi](https://youtu.be/kyZx2BlNWCg) \n
                [Ali Dawah & Mohammed Hijab’s Comedy Show - Refuted by Shaykh Saleh al-Fawzaan](https://youtu.be/N4xMczQqY3s) \n
                [Mohammed Hijab Is An Ikhwani | Refutation by Shaykh Ali al-Hudhayfi al Adeni](https://youtu.be/5IA7Lb3GN1c) \n
                [Mohammed Hijab - Character Assassination Gone Wrong | Shamsi Responds](https://youtu.be/j4r85_QcXC8) \n
                [Mohammed Hijab - The 'Marry & Divorce' Lies | Abu Hakeem, Abu Khadeejah](https://youtu.be/uq3zIVHNO8M) \n\
                [When Ali Dawah & Muhammad Hijab Lied About Shamsi's Teacher](https://youtu.be/YceTsGiaEgg) \n
                [Mohamed Hijab's Flattery And Adoration of Aspects  of  Sikhism](https://youtu.be/m5gZ-od7NHQ) `,
      });

    message.channel.send({
      embeds: [embed],
    });
  },
};
