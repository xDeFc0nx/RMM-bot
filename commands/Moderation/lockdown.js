const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "lockdown",
  category: "Moderation",
  cooldown: 2,
  description: "Locks all channels for a specified time",
  requiredroles: [
    "880565815123005546",
    "923708767076503552",
    "880565815123005547",
    "923710024482705518",
    "1102471726039838791",
    "1035784971379552296",
    "1102471726039838791",
    "1035784971379552296",
  ],
  minargs: 1,
  maxargs: 1,
  argsmissing_message: "Please provide a duration for the lockdown.",
  run: async (client, message, args, plusArgs, cmdUser, text, prefix) => {
    let verified = message.guild.roles.cache.find(
      (r) => r.id === "1118039502552846346"
    );

    // Check if the provided duration is a valid number
    const duration = parseInt(args[0]);
    if (isNaN(duration) || duration <= 0) {
      return message.channel.send(
        "Invalid duration. Please provide a positive number of seconds."
      );
    }

    // Lock all text channels in the server
    message.guild.channels.cache.forEach(async (channel) => {
      if (channel.type === "GUILD_TEXT") {
        await channel.permissionOverwrites.edit(verified, {
          SEND_MESSAGES: false,
        });
      }
    });

    const send = new MessageEmbed()
      .setColor("RED")
      .setDescription(
        `All text channels have been locked for ${duration} seconds.`
      )
      .setFooter(
        message.member.displayName,
        message.author.displayAvatarURL({ dynamic: true })
      );

    message.channel.send({
      embeds: [send],
    });

    // Unlock channels after the specified duration
    setTimeout(() => {
      message.guild.channels.cache.forEach(async (channel) => {
        if (channel.type === "GUILD_TEXT") {
          await channel.permissionOverwrites.edit(verified, {
            SEND_MESSAGES: true,
          });
        }
      });

      const unlockSend = new MessageEmbed()
        .setColor("GREEN")
        .setDescription(`All text channels have been unlocked.`)
        .setFooter(
          message.member.displayName,
          message.author.displayAvatarURL({ dynamic: true })
        );

      message.channel.send({
        embeds: [unlockSend],
      });
    }, duration * 1000);
  },
};
