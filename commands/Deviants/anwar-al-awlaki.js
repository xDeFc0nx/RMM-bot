const { MessageEmbed } = require("discord.js");
const { normalizeUnits } = require("moment");
const config = require("../../botconfig/config.json");
const ee = require("../../botconfig/embed.json");
module.exports = {
  name: "anwar-al-awlaki",
  category: "Deviants",
  aliases: [],
  cooldown: 2,
  usage: "",
  description: "Posts Videos of Anwar Al Awlaki",
  argstoomany_message: "You are having too many arguments for this Command!", //Message if the user has too many / not enough args / too many plus args, which will be sent, leave emtpy / dont add, if you wanna use command.usage or the default message! [OPTIONAL]
  run: async (client, message, args, plusArgs, cmdUser, text, prefix) => {
    const embed = new MessageEmbed()
      .setColor("#303136")
      .setTitle(`Anwar Al Awlaki Refuted`)
      .addFields({
        name: "Videos",
        value: `
        [Refutation of Anwar al-Awlaki's Khariji methodology](https://youtu.be/bUDrlAZWadE) \n
        [Anwar al Awlaki refuted: The story of the Boy and the King](https://youtu.be/_qXQL9zVXT4) \n
        [ion of Awlaki's Fake Credentials (Class 3 - Part 1)](https://youtu.be/vDkjZR8TbYo) \n
        [The Dangerous Methodology of Anwar al-Awlaki - Abu Hakeem Bilal Davis](https://youtu.be/vtm5tg7QnAE) \n
        [The Destruction of Awlaki's Fake Credentials (Class 3 - Part 2)](https://youtu.be/rBw0rteHVXo) \n
        [Refutating Anwar al-Awlaki: Ahl-us-Sunnah's principles of Refutation (Class 1 - Part 2)](https://youtu.be/Ntiydzl2Uq4) \n
        [The Scholars warn against Anwar al-Awlaki](https://www.youtube.com/playlist?list=PLA316EF81EC47FF7F)
         `,
      });

    message.channel.send({
      embeds: [embed],
    });
  },
};
