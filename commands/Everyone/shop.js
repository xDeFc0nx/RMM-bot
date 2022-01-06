const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const config = require("../../botconfig/config.json");
var ee = require("../../botconfig/embed.json");
const moment = require("moment");
const settings = require("../../botconfig/settings.json");
const data = [
  {
    name: "Jundun",
    id: "927213675981455460",
    buy: 1000,
  },
  {
    name: "Emir",
    id: "927213744038232065",
    buy: 25000,
  },
  {
    name: "Furusiyyah",
    id: "927213746525466624",
    buy: 10000,
  },
  {
    name: "Rijal",
    id: "927213745632079883",
    buy: 15000,
  },
  {
    name: "Mubarizun",
    id: "927213744776437791",
    buy: 30000,
  },
  {
    name: "Jundullah",
    id: "927213734944981052",
    buy: 50000,
  },
];
module.exports = {
  name: "shop", //the command name for execution & for helpcmd [OPTIONAL]
  category: "Everyone", //the command category for helpcmd [OPTIONAL]
  aliases: ["sinfo"], //the command aliases for helpcmd [OPTIONAL]
  cooldown: 5, //the command cooldown for execution & for helpcmd [OPTIONAL]
  usage: "serverinfo", //the command usage for helpcmd [OPTIONAL]
  description: "Shows Everyone about the Server", //the command description for helpcmd [OPTIONAL]
  run: async (client, message, args, plusArgs, cmdUser, text, prefix) => {
    await args, plusArgs;
    if (args[0] == "help" || args[0] == "info") {
      const helpEmbed = new MessageEmbed();
      helpEmbed.setTitle("Shop Help");
      helpEmbed.setDescription("Shop Sub-commands");
      helpEmbed.addField("`info/help`", "Shows you this message", true);
      helpEmbed.addField("`buy`", "let's you buy roles", true);
      message.channel.send({
        embeds: [helpEmbed],
      });
    } else {
      const messageEmbed = new MessageEmbed();
      messageEmbed.setTitle("Shop 2.0");
      messageEmbed.setDescription(
        "You can buy the following roles using `!buy`"
      );
      messageEmbed.addField(
        "`1`",
        `<:discord_reply_continued:923683428816261180> <@&927213675981455460>\n <:discord_reply:923683615102087178> 1k Dirham`,
        true
      );
      messageEmbed.addField(
        "`2`",
        `<:discord_reply_continued:923683428816261180> <@&927213744038232065> \n <:discord_reply:923683615102087178> 2.5k Dirham`,
        true
      );
      messageEmbed.addField(
        "`3`",
        `<:discord_reply_continued:923683428816261180><@&927213746525466624> \n <:discord_reply:923683615102087178> 10k Dirham`,
        true
      );
      messageEmbed.addField(
        "`4`",
        `<:discord_reply_continued:923683428816261180> <@&927213745632079883> \n <:discord_reply:923683615102087178> 15k Dirham`,
        true
      );
      messageEmbed.addField(
        "`5`",
        `<:discord_reply_continued:923683428816261180><@&927213744776437791> \n <:discord_reply:923683615102087178> 30k Dirham`,
        true
      );
      messageEmbed.addField(
        "`6`",
        `<:discord_reply_continued:923683428816261180> <@&927213734944981052> \n <:discord_reply:923683615102087178> 50k Dirham`,
        true
      );
      message.channel.send({
        embeds: [messageEmbed],
      });
    }
  },
};
