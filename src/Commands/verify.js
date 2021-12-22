const Command = require("../Structures/Command.js");
const Discord = require("discord.js");
module.exports = new Command({
  name: "verify",
  description: "Shows the ping of the bot!",
  async run(message, args, client) {
    let member = message.mentions.members.first();

    let nonVerified = message.guild.roles.cache.find(
      (r) => r.id === "881530659028496404"
    );
    let verified = message.guild.roles.cache.find(
      (r) => r.id === "881540349649113099"
    );

    const user = message.mentions.users.first();

    const mod = "880565815123005546";

    if (message.guild.roles.cache.has(mod)) {
      if (!user) {
        message.reply("No User specified");
      }
      if (user) {
        member.roles.remove(nonVerified);
        member.roles.add(verified);
        message.channel.send("Verified " + user.toString());

        client.channels.cache
          .get("880565815487918227")
          .send(
            user.toString() +
              " Asalmualikum Warahmatullahi Wabarakatuh, Welcome to RMM(Real Muslim Men) Please read rules in <#880565815487918221>, you can read more information about roles in <#880565815487918222>,get some roles in <#880565815487918223>, and introduce yourself in <#890121772714823680> , Thanks for joining us! :slight_smile:   "
          );
      }
    }
    if (!message.guild.roles.cache.has(mod)) {
      message.reply("**ya akhi, you mad?, you do not have premissions!**");
    }
  },
});
