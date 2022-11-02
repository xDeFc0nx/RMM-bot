const { MessageEmbed } = require("discord.js");
const { normalizeUnits } = require("moment");
const config = require("../../botconfig/config.json");
const ee = require("../../botconfig/embed.json");
module.exports = {
  name: "ali-dawah",
  category: "Deviants",
  aliases: [],
  cooldown: 2,
  usage: "",
  description: "Posts Videos of ali dawah",
  argstoomany_message: "You are having too many arguments for this Command!", //Message if the user has too many / not enough args / too many plus args, which will be sent, leave emtpy / dont add, if you wanna use command.usage or the default message! [OPTIONAL]
  run: async (client, message, args, plusArgs, cmdUser, text, prefix) => {
    const embed = new MessageEmbed()
      .setColor("#303136")
      .setTitle(`Ali "dawah" Refuted`)
      .addFields({
        name: "Videos",
        value: `[Ali Dawah - Showing No Mercy to Muslims](https://youtu.be/ArMtoSRVfuo) \n
                [Ali Dawah & Mohammed Hijab’s Comedy Show - Refuted by Shaykh Saleh al-Fawzaan](https://youtu.be/N4xMczQqY3s) \n
                [Ali Dawah - The Boy Who Cried Cult - Part 1  ](https://youtu.be/eCEK1714isg) \n
                [Ali Dawah - The Boy Who Cried Cult - Part 2  ](https://youtu.be/PXZecuvGHrk) `,
      });

    message.channel.send({
      embeds: [embed],
    });
  },
};
