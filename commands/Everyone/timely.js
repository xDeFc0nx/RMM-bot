const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const config = require("../../botconfig/config.json");
var ee = require("../../botconfig/embed.json");
const moment = require("moment");
const mongoose = require("mongoose");
const Wallet = require("../../schemas/balance.js");
const settings = require("../../botconfig/settings.json");
const { exists } = require("../../schemas/balance.js");
module.exports = {
  name: "timely", //the command name for execution & for helpcmd [OPTIONAL]
  category: "Everyone", //the command category for helpcmd [OPTIONAL]
  aliases: ["sinfo"], //the command aliases for helpcmd [OPTIONAL]
  cooldown: 3600, //the command cooldown for execution & for helpcmd [OPTIONAL]
  usage: "serverinfo", //the command usage for helpcmd [OPTIONAL]
  description: "Shows Everyone about the Server", //the command description for helpcmd [OPTIONAL]
  run: async (client, message) => {
    Wallet.exists({ memberId: message.author.id }).then(async (x) => {
      if (x) {
        const bal = await Wallet.findOne({ memberId: message.author.id });
        const new_bal = bal["amount"] + 200;
        Wallet.findOneAndUpdate(
          { memberId: message.author.id },
          { amount: new_bal }
        ).then((x) => console.log(x));
        const send = new MessageEmbed()
          .setColor("GREEN")
          .setDescription(`You earned 200 Dirham`)
          .setFooter(
            message.member.displayName,
            message.author.displayAvatarURL({ dynamic: true })
          );
          send.addField(
            "You now have",
            `\`${new_bal}\``,
            true
          );
        message.reply({
          embeds: [send],
        });
      } else {
        Wallet.create({
          memberId: message.author.id,
          amount: 200,
        });
      }
    });
  },
};
