const {
  Client,
  Message,
  MessageEmbed,
  MessageActionRow,
  MessageSelectMenu,
  CommandInteraction,
} = require("discord.js");
const config = require("../../botconfig/config.json");
const ee = require("../../botconfig/embed.json");
module.exports = {
  name: "roles", //the Command Name
  category: "Administration", //the Command Category [OPTIONAL]
  cooldown: 2, //the Command Cooldown (Default in /botconfig/settings.json) [OPTIONAL]
  description: "role selection", //the command description [OPTIONAL]
  requiredroles: ["880565815123005547", "880565815123005546"], //Only allow specific Users with a Role to execute a Command [OPTIONAL]
  run: async (client, message, args, plusArgs, cmdUser, text, prefix, interaction) => {
    const row = new MessageActionRow().addComponents(
      new MessageSelectMenu()
        .setCustomId("Roles")
        .setMaxValues(8)
        .setMinValues(2)
        .setPlaceholder("chouse 2 oe 8 roles from below")
        .addOptions([
          {
            label: "announcement",
            value: "anc",
            description: "announcement role",
            // emoji: "",
          },
          {
            label: "ping for dead server",
            value: "deadsrv",
            description: "this role is pinged when the server is inactive",
            // emoji: "",
          },
          {
            label: "partnership",
            value: "part",
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
            value: "ilm",
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
            label: "Pc",
            value: "Pc",
            description: "Pc role opens channels related to IT",
            // emoji: "",
          },
          {
            label: "bump",
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
      filter: (i) => i.user.id === message.author.id,
      time: 60000,
    });

    collector.on("collect", async (i) => {
     
      const roleadded = new Array();
      const roleremoved = new Array();

      await i.deferReply();

      if (i.values[0] === "anc" || i.values[1] === "anc") {
        if (i.member.roles.cache.has(announcement.id)) {
          i.member.roles.remove("889163405842350140");
          roleremoved.push(announcement);
        } else {
          i.member.roles.add("889163405842350140");
          roleadded.push(announcement);
        }
      }

      if (i.values[0] === "part" || i.values[1] === "part") {
        if (i.member.roles.cache.has(partnership.id)) {
          i.member.roles.remove("889161805891510293");
          roleremoved.push(partnership);
        } else {
          i.member.roles.add("889161805891510293");
          roleadded.push(partnership);
        }
      }

      if (i.values[0] === "deadsrv" || i.values[1] === "deadsrv") {
        if (i.member.roles.cache.has(dead.id)) {
          i.member.roles.remove("889159972938711070");
          roleremoved.push(dead);
        } else {
          i.member.roles.add("889159972938711070");
          roleadded.push(dead);
        }

        if (i.values[0] === "qotd" || i.values[1] === "qotd") {
          if (i.member.roles.cache.has(qotd.id)) {
            i.member.roles.remove("889161709531586581");
            roleremoved.push(qotd);
          } else {
            i.member.roles.add("889161709531586581");
            roleadded.push(qotd);
          }
        }

        if (i.values[0] === "ilm" || i.values[1] === "ilm") {
          if (i.member.roles.cache.has(ilm.id)) {
            i.member.roles.remove("889541830025289829");
            roleremoved.push(ilm);
          } else {
            i.member.roles.add("889541830025289829");
            roleadded.push(ilm);
          }
        }
        if (i.values[0] === "minecraft" || i.values[1] === "minecraft") {
          if (i.member.roles.cache.has(minecraft.id)) {
            i.member.roles.remove("888109067376132136");
            roleremoved.push(minecraft);
          } else {
            i.member.roles.add("888109067376132136");
            roleadded.push(minecraft);
          }
        }
        if (i.values[0] === "Pc" || i.values[1] === "Pc") {
          if (i.member.roles.cache.has(Pc.id)) {
            i.member.roles.remove("895620275629088769");
            roleremoved.push(Pc);
          } else {
            i.member.roles.add("895620275629088769");
            roleadded.push(Pc);
          }
        }
        if (i.values[0] === "bump" || i.values[1] === "bump") {
          if (i.member.roles.cache.has(bump.id)) {
            i.member.roles.remove("914628053030826034");
            roleremoved.push(bump);
          } else {
            i.member.roles.add("914628053030826034");
            roleadded.push(bump);
          }
        }

        const rembed = new MessageEmbed()
          .setColor("BLUE")
          .setDescription(
            `Added the role(s): ${roleadded.join(
              ", "
            )}\nRemoved the Role(s): ${roleremoved.join(", ")} `
          );

        await i.editReply({ embeds: [rembed], ephemeral: true });
      }
    });
  },
};
