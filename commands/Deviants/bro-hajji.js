const { MessageEmbed } = require("discord.js");
const { normalizeUnits } = require("moment");
const config = require("../../botconfig/config.json");
const ee = require("../../botconfig/embed.json");
module.exports = {
  name: "bro-hajji",
  category: "Deviants",
  aliases: [],
  cooldown: 2,
  usage: "",
  description: "Posts Videos of Bro hajji",
  argstoomany_message: "You are having too many arguments for this Command!", //Message if the user has too many / not enough args / too many plus args, which will be sent, leave emtpy / dont add, if you wanna use command.usage or the default message! [OPTIONAL]
  run: async (client, message, args, plusArgs, cmdUser, text, prefix) => {
    const embed = new MessageEmbed()
      .setColor("#303136")
      .setTitle(`Bro hajji Refuted`)
      .addFields({
        name: "Videos",
        value: `
        [BRO HAJJI IT'S GAME OVER FOR YOU!! Decimating the Lies of Hajji PART 1](https://youtu.be/wl_uxqvBYSM) \n
        [BRO HAJJI IT'S GAME OVER FOR YOU!! Decimating the lies of Hajji PART 2](https://youtu.be/r8Ru2fMrnmY) \n
        [Part 1: Bro Hajji EXPOSED! The false interpretation of the testimony of faith - Abdulilah Lahmami](https://youtu.be/RLviYTy5qbY) \n
        [Part 2: Bro Hajji EXPOSED! Supplicating against the oppressive rulers - Abu Muadh Taqweem](https://youtu.be/BI7evbrz_Fg) \n
        [Part 3 - Bro Hajji EXPOSED! Decoding Hajji'sTwisted Methodology](https://youtu.be/mzRgObzDBjw) \n
        [Part 4 - Bro Hajji - Obeying the Ruler - Sunnah or Bootlicking?](https://youtu.be/vW3GynxgkQg) \n
        [Part 5 Bro Hajji : Misquoting Al-Mualimi - Like a donkey carrying books](https://youtu.be/oQx6rDH_gGg) \n
        [PART 6 - Bro Hajji - Resembling The People of Zabeed](https://youtu.be/cGNkeWhQoM4) \n
        [Bro Hajji And The Straw That Broke The Donkeys Back | Shamsi](https://youtu.be/DgLAL38tOls) 
        
         `,
      });

    message.channel.send({
      embeds: [embed],
    });
  },
};
