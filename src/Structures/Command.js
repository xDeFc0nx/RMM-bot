/** @format */

const Client = require("./Client.js");

const Discord = require("discord.js");

/**
 * @param {Discord.Message | Discord.Interaction} message
 * @param {string[]} args
 * @param {Client} client
 */
function RunFunction(message, args, client) {}

class Command {
  /**
   * @typedef {{name: string, description: string, premission:  Discord.PremissionString  run: RunFunction}} CommandOptions
   * @param {CommandOptions} options
   */
  constructor(options) {
    this.name = options.name;
    this.description = options.description;
    this.premission = options.premission;
    this.run = options.run;
  }
}

module.exports = Command;
