const { MessageEmbed } = require("discord.js");
const { normalizeUnits } = require("moment");
const config = require("../../botconfig/config.json");
const ee = require("../../botconfig/embed.json");
module.exports = {
  name: "dawah-many",
  category: "Deviants",
  aliases: [],
  cooldown: 2,
  usage: "",
  description: "Posts refutations of Dawah man",
  argstoomany_message: "You are having too many arguments for this Command!", //Message if the user has too many / not enough args / too many plus args, which will be sent, leave emtpy / dont add, if you wanna use command.usage or the default message! [OPTIONAL]
  run: async (client, message, args, plusArgs, cmdUser, text, prefix) => {
    const embed = new MessageEmbed()
      .setColor("#303136")
      .setTitle(`"Dawah" Man Refuted`)
      .addFields({
        name: "Refutations",
        value: `
        [Dawah Man Refuted (Badr Club)](https://youtu.be/ZyQ52ThnQEs) \n
        [Dawah Man Propaganda And Lies Against Salafi's | Shamsi](https://youtu.be/W_nagRBn6mc)
         `,
      });

    message.channel.send({
      embeds: [embed],
    });
  },
};
