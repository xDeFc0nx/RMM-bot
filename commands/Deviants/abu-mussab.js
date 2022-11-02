const { MessageEmbed } = require("discord.js");
const { normalizeUnits } = require("moment");
const config = require("../../botconfig/config.json");
const ee = require("../../botconfig/embed.json");
module.exports = {
  name: "abu-mussab",
  category: "Deviants",
  aliases: [],
  cooldown: 2,
  usage: "",
  description: "Posts Videos of Abu Mussab Wajdi Akkari ",
  argstoomany_message: "You are having too many arguments for this Command!", //Message if the user has too many / not enough args / too many plus args, which will be sent, leave emtpy / dont add, if you wanna use command.usage or the default message! [OPTIONAL]
  run: async (client, message, args, plusArgs, cmdUser, text, prefix) => {
    const embed = new MessageEmbed()
      .setColor("#303136")
      .setTitle(`Abu Mussab Wajdi Akkari  Refuted`)
      .addFields({
        name: "Videos",
        value: `
        [Abu Mussab Wajdi Akkari Defends Yusuf Estes (About Shia Statements)]     (https://youtu.be/iRZdH8kyP98)
        [Abu Mussab Wajdi Akkari Sits in the Shade of the Scholars (Part 1)]             (https://youtu.be/E05nt8-wk5w)
        [Abu Mussab Wajdi Akkari Sits in the Shade of the "Scholars" (Part 2)]                   (https://youtu.be/BneBmaBOKmk)
        [Abu Mussab Wajdi Akkari Sits in the Shade of the "Scholars" (Part 3)]                    (https://youtu.be/qBmbjKi6XD0)
         `,
      });

    message.channel.send({
      embeds: [embed],
    });
  },
};
