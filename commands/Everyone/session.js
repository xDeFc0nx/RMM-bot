const { MessageEmbed } = require("discord.js");

// Store members who have already started a session
const sessionMembers = new Map();

module.exports = {
  name: "session",
  category: "Everyone",
  aliases: [],
  cooldown: 2,
  usage: "<start/stop> <duration>",
  description: "Start or stop a session with a specified duration.",
  run: async (client, message, args, plusArgs, cmdUser, text, prefix) => {
    // Check if the user provided start or stop as the action
    const action = args[0] && args[0].toLowerCase();

    // Define error messages as constants
    const error1 = new MessageEmbed()
      .setColor("RED")
      .setDescription("Please provide a valid duration (e.g., '30 minutes').");
    const error3 = new MessageEmbed()
      .setColor("RED")
      .setDescription("You haven't started a session.");

    const error2 = new MessageEmbed()
      .setColor("RED")
      .setDescription("You've already started a session.");

    if (!action || (action !== "start" && action !== "stop")) {
      return message.reply({ embeds: [error1] });
    }

    if (action === "start") {
      const durationStr = args.slice(1).join(" ");

      // Custom validation to ensure duration format is "X minutes"
      const durationMatch = durationStr.match(/^(\d+(?:\.\d+)?)\s*minutes?$/i);

      if (!durationMatch) {
        return message.reply({ embeds: [error1] });
      }

      var durationMinutes = parseFloat(durationMatch[1]);

      // Check if durationMinutes is a valid number, and if it's greater than 0
      if (isNaN(durationMinutes) || durationMinutes <= 0) {
        return message.reply({ embeds: [error1] });
      }

      // Check if the member has already started a session
      if (sessionMembers.has(message.author.id)) {
        return message.reply({ embeds: [error2] });
      }

      // Create a temporary voice channel
      const voiceChannel = await message.guild.channels.create(
        `・Session ${durationMinutes.toFixed(2)} minutes`,
        {
          type: "GUILD_VOICE",
          parent: message.channel.parent, // Set the parent category of the channel
        }
      );
      const sessiond = new MessageEmbed()
        .setColor("RED")
        .setDescription("Your session has ended.");

      const countdownInterval = setInterval(() => {
        durationMinutes -= 1 / 60; // Subtract 1 second from the remaining time
        if (durationMinutes <= 0) {
          clearInterval(countdownInterval);
          sessionMembers.delete(message.author.id); // Remove the member from the set of session members
          try {
            voiceChannel.delete(); // Delete the voice channel after the session ends
            message.reply({ embeds: [sessiond] });
          } catch (error) {
            console.error(error);
          }
        } else {
          const minutes = Math.floor(durationMinutes);
          const seconds = Math.floor((durationMinutes - minutes) * 60);
          const countdownText = `${minutes} m ${seconds} s)`;
          voiceChannel.setName(`Session ${countdownText--}`);
          durationMinutes -= 0.01; // Subtract 1 second from the remaining time
        }
      }, 1000); // Update every 1 second (1000 milliseconds)
      sessionMembers.set(message.author.id, {
        voiceChannel,
        timer: countdownInterval,
      });
      const sessionst = new MessageEmbed()
        .setColor("GREEN")
        .setDescription(
          `Your session has started for ${durationMinutes.toFixed(
            2
          )} minutes. Enjoy!`
        );

      try {
        message.reply({
          embeds: [sessionst],
        });
      } catch (error) {
        console.error(error);
      }
    } else if (action === "stop") {
      // Handle stopping a session
      if (!sessionMembers.has(message.author.id)) {
        message.reply({ embeds: [error3] });
      } else {
        // Find the voice channel and timer associated with the member
        const { voiceChannel, timer } = sessionMembers.get(message.author.id);

        // Delete the voice channel
        await voiceChannel.delete();

        // Clear the timer
        clearInterval(timer);

        // Remove the member from the set of session members
        sessionMembers.delete(message.author.id);

        try {
          message.reply({ embeds: [sessiond] });
        } catch (error) {
          console.error(error);
        }
      }
    }
  },
};
