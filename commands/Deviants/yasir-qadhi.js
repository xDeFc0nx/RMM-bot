const { MessageEmbed, MessageButton } = require("discord.js");
const paginationEmbed = require("discordjs-button-pagination");

const { normalizeUnits } = require("moment");
const config = require("../../botconfig/config.json");
const ee = require("../../botconfig/embed.json");
module.exports = {
  name: "yasir-qadhi",
  category: "Deviants",
  aliases: [],
  cooldown: 2,
  usage: "",
  description: "Posts Videos of Yasir Qadhi",
  argstoomany_message: "You are having too many arguments for this Command!", //Message if the user has too many / not enough args / too many plus args, which will be sent, leave emtpy / dont add, if you wanna use command.usage or the default message! [OPTIONAL]
  run: async (client, message, args, plusArgs, cmdUser, text, prefix) => {
    const button = new MessageButton()
      .setCustomId("1")
      .setLabel("⏪")
      .setStyle("SECONDARY");
    const button2 = new MessageButton()
      .setCustomId("2")
      .setLabel("⏩")
      .setStyle("SECONDARY");
    const timeout = 10000;

    const embed = new MessageEmbed()
      .setColor("#303136")
      .setTitle(`Yasir Qadhi Refuted`)
      .addFields({
        name: "Videos 1",
        value: `
        [Yasir Qadhi/Fadhi : A heretic who slanders the Ahlul Sunah/Hadith.](https://youtu.be/t2jQ_H-Rd0Q) \n
        [Yasir qadhi/fadhi : Those who claimed to be Allāh they were sincere & i don't have no probs with it](https://www.youtube.com/watch?v=6lGxeCzLJKo) \n
        [Keep Far Away From the Lectures of Yasir Qadhi - Abu Hakeem Bilal Davis](https://youtu.be/oAUBUqo_8OY) \n 
        [Post-Yale Yasir Qadhi Accepted by Shia Imams at Ikhwani ISNA Convention](https://youtu.be/ohk28x0ooRE) \n
        [Yasir Qadhi's Unverified Misinformation on Shia Press TV](https://youtu.be/PRCPsNdIKcg) \n
        [Yasir Qadhi Separates You from the Muslim Scholars](https://youtu.be/a6naD4l_AUU) \n
        [Post-Yale Yasir Qadhi: A Changed Man, a Changed Aqidah](https://youtu.be/bylSAQTS8DE) \n
        [Whose Life is Yasir Qadhi Referring to as a "Fairy Tale"?](https://youtu.be/uCPfaQy5X3k) \n
        [Was Yasir Qadhi/Fadhi ever upon good, Stay away from his lectures: Us Bilal Davis حفظه الله](https://youtu.be/GNDTf5ERp6g) 
         `,
      });
    const embed2 = new MessageEmbed()
      .setColor("#303136")
      .setTitle(`Yasir Qadhi Refuted`)
      .addFields({
        name: "Videos 2",
        value: `
          [The "Yasir Qadhi - Tony Blair" Relationship Examined (Part 1)](https://youtu.be/vD0sM3ANMus) \n
          [The "Yasir Qadhi - Tony Blair" Relationship Examined (Part 2)](https://youtu.be/hAzLcqOubOU) \n
          [Yasir qadhi Slandering Ūmar Radiallahu Anhu (He doesn't know Aqeedah) :By Abū Khadeeja حفظه الله](https://youtu.be/iiWHf2KL8Y4) \n`,
      });
    const pages = [embed, embed2];
    const buttonList = [button, button2];

    paginationEmbed(message, pages, buttonList, timeout);
  },
};
