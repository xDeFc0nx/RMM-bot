const Discord = require("discord.js");
const config = require(`./botconfig/config.json`);
const settings = require(`./botconfig/settings.json`);
const colors = require("colors");
const db = require("./events/guild/db");
const client = new Discord.Client({
  //fetchAllMembers: false,
  //restTimeOffset: 0,
  //restWsBridgetimeout: 100,
  shards: "auto",
  allowedMentions: {
    parse: [],
    repliedUser: false,
  },
  partials: ["MESSAGE", "CHANNEL", "REACTION"],
  intents: [32759],
  presence: {
    activity: {
      name: `Music`,
      type: "LISTENING",
    },
    status: "online",
  },
});
//Define some Global Collections
client.commands = new Discord.Collection();
client.cooldowns = new Discord.Collection();
client.slashCommands = new Discord.Collection();
client.aliases = new Discord.Collection();
client.categories = require("fs").readdirSync(`./commands`);
//Require the Handlers                  Add the antiCrash file too, if its enabled
["events", "commands", "slashCommands", settings.antiCrash ? "antiCrash" : null]
  .filter(Boolean)
  .forEach((h) => {
    require(`./handlers/${h}`)(client);
  });
//Start the Bot
client.login(config.token);
