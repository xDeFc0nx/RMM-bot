const { MessageEmbed } = require("discord.js");
const { normalizeUnits } = require("moment");
const config = require("../../botconfig/config.json");
const ee = require("../../botconfig/embed.json");
module.exports = {
  name: "abu-usamah-adhahabi",
  category: "Deviants",
  aliases: [],
  cooldown: 2,
  usage: "",
  description: "Posts refutations of Abu Usamah Adhahabi",
  argstoomany_message: "You are having too many arguments for this Command!", //Message if the user has too many / not enough args / too many plus args, which will be sent, leave emtpy / dont add, if you wanna use command.usage or the default message! [OPTIONAL]
  run: async (client, message, args, plusArgs, cmdUser, text, prefix) => {
    const embed = new MessageEmbed()
      .setColor("#303136")
      .setTitle(`Abu Usamah Adhahabi Refuted`)
      .addFields({
        name: "Refutations",
        value: `
        [Defending Salaffiyyah And Abu Bakr From The Filthy Mouth Of Abu Usamah At-Thahabi](https://youtu.be/iYRsOMNIySo)
         `,
      });

    message.channel.send({
      embeds: [embed],
    });
  },
};
