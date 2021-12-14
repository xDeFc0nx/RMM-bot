const Command = require("../Structures/Command.js");
const Discord = require("discord.js");
module.exports = new Command({
  name: "help",
  description: "shows all the commands",
  async run(message, args, client) {
    const embed = new Discord.MessageEmbed()
      .setAuthor(
        message.author.tag,
        message.author.displayAvatarURL({ dynamic: true })
      )
      .setTitle(`${message.author.tag} | Help Menu!`)
      .setDescription("My Prefix Is !")
      .addField(
        `General commands:`,
        `!help - Shows all the commands you can use!\n !ban - Bans a User from the Server.\n!kick - Kicks a User from the Server.\n!lock - Locks the current channel.\n!unlock - Unlocks the current channel.\n!slowmode - Sets the channels slowmode.\n!verify - Verrifies a member`
      );

    message.channel.send({ embeds: [embed] });
  },
});
