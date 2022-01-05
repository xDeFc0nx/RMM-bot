const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const config = require("../../botconfig/config.json");
var ee = require("../../botconfig/embed.json");
const moment = require("moment");
const settings = require("../../botconfig/settings.json");
const Wallet = require("../../schemas/balance.js");

const data = [
  { name: "Jundun", id: "927213675981455460", buy: 1000 },
  {
    name: "Emir",
    id: "927213744038232065",
    buy: 2500,
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
  { name: "Mubarizun", id: "927213744776437791", buy: 30000 },
  { name: "Jundullah", id: "927213734944981052", buy: 50000 },
];
module.exports = {
  name: "buy", //the command name for execution & for helpcmd [OPTIONAL]
  category: "Everyone", //the command category for helpcmd [OPTIONAL]
  aliases: ["sinfo"], //the command aliases for helpcmd [OPTIONAL]
  cooldown: 5, //the command cooldown for execution & for helpcmd [OPTIONAL]
  usage: "serverinfo", //the command usage for helpcmd [OPTIONAL]
  description: "Shows Everyone about the Server", //the command description for helpcmd [OPTIONAL]
  run: async (client, message, args, plusArgs, cmdUser, text, prefix) => {
    Wallet.exists({ memberId: message.author.id }).then(async (x) => {
      if (x) {
        const bal = await Wallet.findOne({ memberId: message.author.id });
        user_has = bal["amount"];
        user_needs = data[args[0] - 1]["buy"];
        if (user_needs > user_has) {
          message.channel.send(
            "bro you need " +
              String(user_needs - user_has) +
              " more dinars to buy the role you requested i.e " +
              data[args[0] - 1]["name"]
          );
        } else {
          let role = message.guild.roles.cache.find(
            (r) => r.id === data[args[0] - 1]["id"]
          );

          if (
            message.member.roles.cache.some(
              (role) => role.id == data[args[0] - 1]["id"]
            )
          ) {
            message.channel.send(
              "You already have the role buy something else bro"
            );
          } else {
            message.member.roles.add(role);
            const new_bal = user_has - user_needs;
            Wallet.findOneAndUpdate(
              { memberId: message.author.id },
              { amount: new_bal }
            ).then((x) => console.log(x));
            const embeduserinfo = new MessageEmbed();
            embeduserinfo.setTitle("Success");
            embeduserinfo.setDescription(
              "You have purchased the role and have equipped it, thank you :)"
            );
            embeduserinfo.setThumbnail(
              message.guild.iconURL({ dynamic: true, size: 512 })
            );

            embeduserinfo.addField(
              "Your current balance",
              `\`${new_bal}\``,
              true
            );

            embeduserinfo.setColor(role.hexColor);

            //send the EMBED
            message.reply({ embeds: [embeduserinfo] });
          }
        }
      } else {
        message.channel.sent(
          "Bruh you don't even have an account, do !timely first"
        );
      }
    });
  },
};
