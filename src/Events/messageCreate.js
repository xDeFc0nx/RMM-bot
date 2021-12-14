const Event = require("../Structures/Event.js");

module.exports = new Event("messageCreate", (client, message) => {
  if (message.author.bot) return;

  if (!message.content.startsWith(client.prefix)) return;

  const args = message.content.substring(client.prefix.length).split(/ +/);

  const command = client.commands.find((cmd) => cmd.name == args[0]);

  if (!command) return message.reply(`${args[0]} is not a valid command!`);

  const premission = member.roles.cache.has("880565815123005546");

  if (!premission)
    return message.reply("**ya akhi, you mad?, you do not have premissions!**");

  command.run(message, args, client);
});
