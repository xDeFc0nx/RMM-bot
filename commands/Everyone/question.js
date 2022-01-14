const { MessageEmbed } = require("discord.js");
const config = require("../../botconfig/config.json");
const ee = require("../../botconfig/embed.json");
module.exports = {
  name: "q",
  category: "Everyone",
  aliases: [],
  cooldown: 10000,
  usage: "embed <Question>",
  description: "Asks a question",
  minplusargs: 1,
  maxplusargs: 0,
  run: async (client, message, args, plusArgs, cmdUser, text, prefix) => {
    try {
      let question = plusArgs[0];
      client.channels.cache.get("931476993051070575").send({
        embeds: [
          new MessageEmbed()
            .setColor(ee.color)
            .setTitle(question ? question.substr(0, 256) : "")
            .setFooter(
              message.member.displayName,
              message.author.displayAvatarURL({ dynamic: true })
            ),
        ],
      });
    } catch (e) {
      console.log(String(e.stack).bgRed);
      return message.reply({
        embeds: [
          new MessageEmbed()
            .setColor(ee.wrongcolor)
            .setFooter(ee.footertext, ee.footericon)
            .setTitle(`❌ ERROR | An error occurred`)
            .setDescription(
              `\`\`\`${
                e.message
                  ? String(e.message).substr(0, 2000)
                  : String(e).substr(0, 2000)
              }\`\`\``
            ),
        ],
      });
    }
    await message.delete();
  },
};
