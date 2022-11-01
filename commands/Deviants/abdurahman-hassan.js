const { MessageEmbed } = require("discord.js");
const { normalizeUnits } = require("moment");
const config = require("../../botconfig/config.json");
const ee = require("../../botconfig/embed.json");
module.exports = {
  name: "abdurahman-hassan",
  category: "Deviants",
  aliases: [],
  cooldown: 2,
  usage: "",
  description: "Posts refutations of abdurahman hassan",
  argstoomany_message: "You are having too many arguments for this Command!", //Message if the user has too many / not enough args / too many plus args, which will be sent, leave emtpy / dont add, if you wanna use command.usage or the default message! [OPTIONAL]
  run: async (client, message, args, plusArgs, cmdUser, text, prefix) => {
    const embed = new MessageEmbed()
      .setColor("#303136")
      .setTitle(`Abdurahman hassan Refuted`)
      .addFields({
        name: "Refutations",
        value: `[Abu Iyaad Article on Abdurahman Hassan Part 1](http://www.manhaj.com/manhaj/assets/docs/arh-ikhwani-usool-a.pdf) \n
                [Abu Iyaad Article on Abdurahman Hassan Part 2](http://www.manhaj.com/manhaj/assets/docs/arh-ikhwani-usool-b.pdf) \n
                [The False Understanding of Abdurahman Hassan Part 1](https://youtu.be/Ae-eXO0plBQ) \n
                [The False Understanding of Abdurahman Hassan Part 2](https://youtu.be/jsvqB3xI-J8) \n
                [The False Understanding of Abdurahman Hassan Part 3](https://youtu.be/fJhi4RO6-TI) \n
                ["You Are Not Allowed To Test The People With Individuals"](https://youtu.be/fJhi4RO6-TI) `,
      });

    message.channel.send({
      embeds: [embed],
    });
  },
};
