const { MessageEmbed } = require("discord.js");
const { normalizeUnits } = require("moment");
const config = require("../../botconfig/config.json");
const ee = require("../../botconfig/embed.json");
module.exports = {
  name: "mute", //the Command Name
  category: "Moderation", //the Command Category [OPTIONAL]
  aliases: [], //the command aliases [OPTIONAL]
  cooldown: 2, //the Command Cooldown (Default in /botconfig/settings.json) [OPTIONAL]
  usage: "uses the new timeout featrue, its buggy, use s and m for time", //the Command usage [OPTIONAL]
  description: "Resends your Text", //the command description [OPTIONAL]
  memberpermissions: [], //Only allow members with specific Permissions to execute a Commmand [OPTIONAL]
  requiredroles: [
    "880565815123005546",
    "923708767076503552",
    "880565815123005547",
    "923710024482705518",
  ], //Only allow specific Users with a Role to execute a Command [OPTIONAL]
  alloweduserids: [], //Only allow specific Users to execute a Command [OPTIONAL]
  minargs: 1, // minimum args for the message, 0 == none [OPTIONAL]
  maxargs: 0, // maximum args for the message, 0 == none [OPTIONAL]
  minplusargs: 0, // minimum args for the message, splitted with "++" , 0 == none [OPTIONAL]
  maxplusargs: 0, // maximum args for the message, splitted with "++" , 0 == none [OPTIONAL]
  argsmissing_message: "You are missing the text you wanna add to the message!", //Message if the user has not enough args / not enough plus args, which will be sent, leave emtpy / dont add, if you wanna use command.usage or the default message! [OPTIONAL]
  argstoomany_message: "You are having too many arguments for this Command!", //Message if the user has too many / not enough args / too many plus args, which will be sent, leave emtpy / dont add, if you wanna use command.usage or the default message! [OPTIONAL]
  run: async (client, message, args, plusArgs, cmdUser, text, prefix) => {


    const fetch = require('node-fetch')
    const ms = require('ms')
    const time = args.slice(1).join(" ");
    const reason = args.slice(1).join(' ');
    if(!reason) reason = '`None`';
    if(reason.length > 1024 ) reason = reason.slice(0, 1021) + '...';
    

    if (!time) {
      const error = new MessageEmbed()
        .setColor("RED")
        .setDescription("Specify the Time");
      message.reply({ embeds: [error] });
    }

    const user = message.mentions.users.first()
    const m = ms(time)


    if(!user){
      const error1 = new MessageEmbed()
      .setColor("RED")
      .setDescription("Akhi Specify a user");
    message.reply({ embeds: [error1] });
    }
    if(!m || m < 1000 || m > 2419200000){
      const error2 = new MessageEmbed()
      .setColor("RED")
      .setDescription("Invalid time, the limit is 10s and 28d");
    message.reply({ embeds: [error2] });
    }
    const iosTime = new Date(Date.now() + m).toISOString()

    await fetch(`https://discord.com/api/guilds/${message.guild.id}/members/${user.id}`,{
      method: 'PATCH',
      body: JSON.stringify({communication_disabled_until: iosTime}),
      headers:{
        'Content-Type': "application/json",
        'Authorization': `Bot ${client.token}`,

      }
  
    })
    await message.delete();
    const send = new MessageEmbed()
        .setColor("GREEN")
        .setDescription(` ${user.toString()} was muted, he most have said somthing`)
        .addField( 'Time', `${time}`)
        .setFooter(message.member.displayName, message.author.displayAvatarURL({dynamic: true}))
      message.channel.send({
        embeds: [send],
      });
  },
};