/**
 * @INFO
 * Loading all needed File Everyone Parameters
 */

const config = require("../../botconfig/config.json");
const settings = require("../../botconfig/settings.json");
const ee = require("../../botconfig/embed.json");
const Discord = require("discord.js");
const profileModel = require("../../schemas/profileSchema");

module.exports = (client, discord, member) => {
  // let profile = await profileModel.create({
  //   userID: member.id,
  //   serverID: member.guild.id,
  //   dinar: 0,
  // });
  // profile.save();
};
