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
  name: "bal", //the command name for execution & for helpcmd [OPTIONAL]
  category: "Everyone", //the command category for helpcmd [OPTIONAL]
  aliases: ["sinfo"], //the command aliases for helpcmd [OPTIONAL]
  cooldown: 5, //the command cooldown for execution & for helpcmd [OPTIONAL]
  usage: "serverinfo", //the command usage for helpcmd [OPTIONAL]
  description: "Shows Everyone about the Server", //the command description for helpcmd [OPTIONAL]
  run: async (client, message) => {
    if (message.mentions.members.first()) {
      Wallet.exists({
        memberId: message.mentions.members.first()["user"]["id"],
      }).then(async (x) => {
        if (x) {
          const bal = await Wallet.findOne({
            memberId: message.mentions.members.first()["user"]["id"],
          });
          const has_bal = bal["amount"];
          const send = new MessageEmbed()
            .setColor("GREEN")
            .setDescription(`You have ${has_bal} Dirham`)
            .setFooter(message.mentions.members.first()["user"]["username"]);
          message.reply({
            embeds: [send],
          });
        } else {
          Wallet.create({
            memberId: message.author.id,
            amount: 0,
          });
          const send = new MessageEmbed()
            .setColor("GREEN")
            .setDescription(`You have 0 Dirham`)
            .setFooter(message.mentions.members.first()["user"]["username"]);
          message.reply({
            embeds: [send],
          });
        }
      });
    } else {
      Wallet.exists({ memberId: message.author.id }).then(async (x) => {
        if (x) {
          const bal = await Wallet.findOne({ memberId: message.author.id });
          const has_bal = bal["amount"];
          const send = new MessageEmbed()
            .setColor("GREEN")
            .setDescription(`You have ${has_bal} Dirham`)
            .setFooter(
              message.member.displayName,
              message.author.displayAvatarURL({ dynamic: true })
            );
          message.reply({
            embeds: [send],
          });
        } else {
          Wallet.create({
            memberId: message.author.id,
            amount: 0,
          });
          const send = new MessageEmbed()
            .setColor("GREEN")
            .setDescription(`You have 0 Dirham`)
            .setFooter(
              message.member.displayName,
              message.author.displayAvatarURL({ dynamic: true })
            );
          message.reply({
            embeds: [send],
          });
        }
      });
    }
  },
};
