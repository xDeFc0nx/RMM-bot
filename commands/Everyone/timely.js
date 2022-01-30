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

        const level100 = bal["amount"] + 5000;
        const level50 = bal["amount"] + 1000;
        const level25 = bal["amount"] + 800;
        const level15 = bal["amount"] + 500;
        const level10 = bal["amount"] + 400;
        const level5 = bal["amount"] + 100;
        const nolvl1 = bal["amount"] + 50;

        let lvl100 = message.guild.roles.cache.find(
          (r) => r.id === "880565815102046254"
        );
        let lvl50 = message.guild.roles.cache.find(
          (r) => r.id === "880565815102046253"
        );

        let lvl25 = message.guild.roles.cache.find(
          (r) => r.id === "880565815102046252"
        );

        let lvl15 = message.guild.roles.cache.find(
          (r) => r.id === "880565815102046251"
        );

        let lvl10 = message.guild.roles.cache.find(
          (r) => r.id === "880565815102046250"
        );

        let lvl5 = message.guild.roles.cache.find(
          (r) => r.id === "880565815102046249"
        );
        let nolvl = message.guild.roles.cache.find(
          (r) => r.id === "881540349649113099"
        );

        if (message.member.roles.has(lvl100)) {
          Wallet.findOneAndUpdate(
            { memberId: message.author.id },
            { amount: level100 }
          ).then((x) => console.log(x));
          const send = new MessageEmbed()
            .setColor("GREEN")
            .setDescription(`You earned 5000 Dirham`)
            .setFooter(
              message.member.displayName,
              message.author.displayAvatarURL({ dynamic: true })
            );
          send.addField("You now have", `\`${level100}\``, true);
          message.reply({
            embeds: [send],
          });
        } else {
          Wallet.create({
            memberId: message.author.id,
            amount: 5000,
          });
        }
        if (message.member.roles.has(lvl50)) {
          Wallet.findOneAndUpdate(
            { memberId: message.author.id },
            { amount: level50 }
          ).then((x) => console.log(x));
          const send1 = new MessageEmbed()
            .setColor("GREEN")
            .setDescription(`You earned 1000 Dirham`)
            .setFooter(
              message.member.displayName,
              message.author.displayAvatarURL({ dynamic: true })
            );
          send.addField("You now have", `\`${level50}\``, true);
          message.reply({
            embeds: [send1],
          });
        } else {
          Wallet.create({
            memberId: message.author.id,
            amount: 1000,
          });
        }

        if (message.member.roles.has(lvl25)) {
          Wallet.findOneAndUpdate(
            { memberId: message.author.id },
            { amount: level25 }
          ).then((x) => console.log(x));
          const send2 = new MessageEmbed()
            .setColor("GREEN")
            .setDescription(`You earned 800 Dirham`)
            .setFooter(
              message.member.displayName,
              message.author.displayAvatarURL({ dynamic: true })
            );
          send.addField("You now have", `\`${level25}\``, true);
          message.reply({
            embeds: [send2],
          });
        } else {
          Wallet.create({
            memberId: message.author.id,
            amount: 5000,
          });
        }
        if (message.member.roles.has(lvl15)) {
          Wallet.findOneAndUpdate(
            { memberId: message.author.id },
            { amount: level15 }
          ).then((x) => console.log(x));
          const send3 = new MessageEmbed()
            .setColor("GREEN")
            .setDescription(`You earned 500 Dirham`)
            .setFooter(
              message.member.displayName,
              message.author.displayAvatarURL({ dynamic: true })
            );
          send.addField("You now have", `\`${level15}\``, true);
          message.reply({
            embeds: [send3],
          });
        } else {
          Wallet.create({
            memberId: message.author.id,
            amount: 500,
          });
        }
        if (message.member.roles.has(lvl10)) {
          Wallet.findOneAndUpdate(
            { memberId: message.author.id },
            { amount: level10 }
          ).then((x) => console.log(x));
          const send4 = new MessageEmbed()
            .setColor("GREEN")
            .setDescription(`You earned 400 Dirham`)
            .setFooter(
              message.member.displayName,
              message.author.displayAvatarURL({ dynamic: true })
            );
          send.addField("You now have", `\`${level10}\``, true);
          message.reply({
            embeds: [send4],
          });
        } else {
          Wallet.create({
            memberId: message.author.id,
            amount: 400,
          });
        }
        if (message.member.roles.has(lvl5)) {
          Wallet.findOneAndUpdate(
            { memberId: message.author.id },
            { amount: level5 }
          ).then((x) => console.log(x));
          const send5 = new MessageEmbed()
            .setColor("GREEN")
            .setDescription(`You earned 100 Dirham`)
            .setFooter(
              message.member.displayName,
              message.author.displayAvatarURL({ dynamic: true })
            );
          send.addField("You now have", `\`${level5}\``, true);
          message.reply({
            embeds: [send5],
          });
        } else {
          Wallet.create({
            memberId: message.author.id,
            amount: 100,
          });
        }
        if (message.member.roles.has(nolvl)) {
          Wallet.findOneAndUpdate(
            { memberId: message.author.id },
            { amount: nolvl1 }
          ).then((x) => console.log(x));
          const send6 = new MessageEmbed()
            .setColor("GREEN")
            .setDescription(`You earned 50 Dirham`)
            .setFooter(
              message.member.displayName,
              message.author.displayAvatarURL({ dynamic: true })
            );
          send.addField("You now have", `\`${nolvl1}\``, true);
          message.reply({
            embeds: [send6],
          });
        } else {
          Wallet.create({
            memberId: message.author.id,
            amount: 50,
          });
        }
      }
    });
  },
};
