// Import necessary modules
const { MessageEmbed } = require("discord.js");
const Blacklist = require("../../schemas/blacklistSchema");

module.exports = {
  name: "blacklist",
  category: "Moderation",
  description: "Add, remove, or list words in the blacklist.",
  usage: "<add/remove> [word]",
  requiredPermissions: ["MANAGE_GUILD"], // Adjust permissions as needed
  run: async (client, message, args) => {
    // Check if the user provided add or remove as the action
    const action = args[0] && args[0].toLowerCase();
    if (!action || (action !== "add" && action !== "remove")) {
      return message.reply(
        "Please specify whether to add or remove words from the blacklist."
      );
    }

    // Check if a word was provided for add/remove actions
    const word = args[1] && args[1].toLowerCase();

    if (!word) {
      return message.reply(
        "Please provide a word to add or remove from the blacklist."
      );
    }

    try {
      if (action === "add") {
        // Check if the word is already in the blacklist
        const existingWord = await Blacklist.findOne({ word });
        if (existingWord) {
          return message.reply("This word is already in the blacklist.");
        }

        // Create a new document in the database for the word
        await Blacklist.create({ word });

        // Send a success message for adding the word
        const successAddEmbed = new MessageEmbed()
          .setColor("GREEN")
          .setDescription(`Word "${word}" has been added to the blacklist.`);
        message.reply({ embeds: [successAddEmbed] });
      } else if (action === "remove") {
        // Check if the word exists in the blacklist
        const existingWord = await Blacklist.findOne({ word });
        if (!existingWord) {
          return message.reply("This word is not in the blacklist.");
        }

        // Remove the word from the blacklist
        await Blacklist.findOneAndDelete({ word });

        // Send a success message for removing the word
        const successRemoveEmbed = new MessageEmbed()
          .setColor("GREEN")
          .setDescription(
            `Word "${word}" has been removed from the blacklist.`
          );
        message.reply({ embeds: [successRemoveEmbed] });
      }
    } catch (error) {
      console.error("Error managing blacklist:", error);
      message.reply("An error occurred while managing the blacklist.");
    }
  },
};
