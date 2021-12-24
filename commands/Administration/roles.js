const { Client, Message, MessageEmbed } = require("discord.js");
const { MessageActionRow, MessageSelectMenu } = require("discord.js");
const config = require("../../botconfig/config.json");
const ee = require("../../botconfig/embed.json");
module.exports = {
  name: "roles", //the Command Name
  category: "Administration", //the Command Category [OPTIONAL]
  cooldown: 2, //the Command Cooldown (Default in /botconfig/settings.json) [OPTIONAL]
  description: "role selection", //the command description [OPTIONAL]
  requiredroles: ["880565815123005547", "880565815123005546"], //Only allow specific Users with a Role to execute a Command [OPTIONAL]
  run: async (client, message, args, plusArgs, cmdUser, text, prefix) => {
    const row = new MessageActionRow().addComponents(
      new MessageSelectMenu()
        .setCustomId("test")
        .setMaxValues(5)
        .setMinValues(1)
        .setPlaceholder("please chouse 1 or more roles from below")
        .addOptions([
          {
            label: "announcement",
            value: "announcement",
            description: "announcement role",
            // emoji: "",
          },
          {
            label: "ping for dead server",
            value: "ping for dead server",
            description: "this role is pinged when the server is inactive",
            // emoji: "",
          },
          {
            label: "partnership",
            value: "partnership",
            description: "Ping for partnership",
            // emoji: "",
          },
          {
            label: "qotd",
            value: "qotd",
            description: "get pinged for qotd ",
            // emoji: "",
          },
          {
            label: "ilm student ",
            value: "ilm student",
            description: "ilm student role opens medresah channels",
            // emoji: "",
          },
          {
            label: "Minecraft ",
            value: "Minecraft",
            description: "Minecraft role opens Minecraft channels",
            // emoji: "",
          },
          {
            label: "Pc ",
            value: "Pc",
            description: "Pc role opens channels related to IT",
            // emoji: "",
          },
          {
            label: "bump ",
            value: "bump",
            description: "you get pinged when its time to bump the server",
            // emoji: "",
          },
        ])
    );
    const embed = new MessageEmbed()
    .setColor("BLUE")
    .setDescription("use the button below to get roles");
    const m = await message.channel.send({
      embeds: [embed],
      components: [row],
    });
    
    const collector = m.createMessageComponentCollector({
      filter: i=>i.user.id === message.author.id,
      time: 60000,
    });
    
    collector.on("collect", async i => {
      interaction.deferUpdate()
      const announcement = i.guild.roles.cache.get("889163405842350140");
      const dead = i.guild.roles.cache.get("889159972938711070");
      const partnership = i.guild.roles.cache.get("889161805891510293");
      const roleadded = new Array();
      const roleremoved = new Array();

      if (i.values[0] === `announcement` || i.values[1] === `announcement`) {
        if (i.member.roles.cache.has(announcement.id)) {
          roleremoved.push(announcement);
          i.member.roles.remove("889163405842350140");
          i.reply({
            content: `Removed the ${announcement} role`,
            ephemeral: true,
          });
        } else {
          roleadded.push(announcement);
          i.member.roles.add("889163405842350140");
        }
      }
      if (i.values[0] === `partnership` || i.values[1] === `partnership`) {
        if (i.member.roles.cache.has(dead.id)) {
          i.member.roles.remove("889161805891510293");
          roleremoved.push(partnership);
          i.reply({
            content: `Removed the ${partnership} role`,
            ephemeral: true,
          });
        } else {
          roleadded.push(partnership);
          i.member.roles.add("889161805891510293");
        }
      }
      if (
        i.values[0] === `ping for dead server` ||
        i.values[1] === `ping for dead server`
      ) {
        if (i.member.roles.cache.has(dead.id)) {
          roleremoved.push(dead);
          i.member.roles.remove("889159972938711070");

          i.reply({ content: `Removed the ${dead} role`, ephemeral: true });
        } else {
          roleadded.push(dead);
          i.member.roles.add("889159972938711070");
        }
        const rembed = new MessageEmbed()
          .setColor("BLUE")
          .setDescription(`Added the role(s): ${roleadded.join(", ")}\nRemoved the Role(s): ${roleremoved.join(", ")} `);
          i.reply({ embeds: [rembed], ephemeral: true });
      }
    });
  },
};
