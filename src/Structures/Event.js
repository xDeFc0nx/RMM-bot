const Discord = require("discord.js");

const Client = require("./Client.js");

/**
 *@template {Keyof Discord.CLientEvents} k
 * @param {Client} client
 * @param  {Discord.ClientEvents[K]} eventArgs
 */

const { DiscordAPIError } = require("discord.js");

function RunFunction(client, ...eventArgs) {}
/**
 * @template {Keypf Discord.CLientEvents} k
 */
class Event {
  /**
   *
   * @param {K} event
   * @param {RunFunction<K>} runFuntion
   */
  constructor(event, runFuntion) {
    this.event = event;
    this.run = runFuntion;
  }
}
module.exports = Event;
