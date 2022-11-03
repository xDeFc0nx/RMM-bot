const { MessageEmbed, MessageButton } = require("discord.js");
const paginationEmbed = require("discordjs-button-pagination");

const { normalizeUnits } = require("moment");
const config = require("../../botconfig/config.json");
const ee = require("../../botconfig/embed.json");
module.exports = {
  name: "zakir-naik",
  category: "Deviants",
  aliases: [],
  cooldown: 2,
  usage: "",
  description: "Posts Videos of Zakir Naik",
  argstoomany_message: "You are having too many arguments for this Command!", //Message if the user has too many / not enough args / too many plus args, which will be sent, leave emtpy / dont add, if you wanna use command.usage or the default message! [OPTIONAL]
  run: async (client, message, args, plusArgs, cmdUser, text, prefix) => {
    const button = new MessageButton()
      .setCustomId("1")
      .setLabel("⏪")
      .setStyle("DANGER");
    const button2 = new MessageButton()
      .setCustomId("2")
      .setLabel("⏩")
      .setStyle("SUCCESS");

    const embed = new MessageEmbed()
      .setColor("#303136")
      .setTitle(`Zakir Naik Refuted`)
      .addFields({
        name: "Videos 1",
        value: `
        [Zakir Naik Refuted By Abu Khadeejah](https://youtu.be/elalt7eYCsc) \n
        [Zakir Naik and Huda TV Director Supporting Harun Yahya](https://youtu.be/uj-Xmex4-mE)\n
        [Refutation On Zakir Naik's Claim That Allah Cannot Do All Things By Moosa Richardson](https://youtu.be/pR9lu6AIsCY)\n
        [Zakir Naik Refuted By Shaikh Salih Al fawzan](https://youtu.be/_XFB_ywkxKg)\n
        [Zakir Naik Permits Suicide As War Tactic Even Today - Refuted By Shaykh Ibn ʿUthaymīn](https://youtu.be/N20NOsMiPNk)\n
         `,
      });
    const embed2 = new MessageEmbed()
      .setColor("#303136")
      .setTitle(`Zakir Naik Refuted`)
      .addFields({
        name: "Videos 2",
        value: `
        [Zakir Naik Still Thinks Allah Cannot Do All Things](https://youtu.be/m3oKGnCVj_s)\n
        [Refutation On The Saying Of Zakir Naik That The Quran Describes The Big Bang 1400 Years Ago](https://youtu.be/U79EmXWQkxE)\n
        [Refutation On Zakir Naik For Supporting Osama Bin Laden In Terrorizing America By Abu Khadeejah](https://youtu.be/k4uurTKAzRE)\n
        [Zakir Naik Says Non Muslims Are Our Brothers In Humanity Nonsense Refuted](https://youtu.be/EoP5yEv2t-o)\n
        [The Recent Ban OF Zakir Naik - By Abu Khadeejah Abul Waahid](https://youtu.be/U01thDDarbc)
        `,
      });
    const pages = [embed, embed2];
    const buttonList = [button, button2];

    paginationEmbed(message, pages, buttonList);
  },
};
