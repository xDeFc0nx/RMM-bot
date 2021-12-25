const { MessageEmbed } = require("discord.js");
const config = require("../../botconfig/config.json");
const ee = require("../../botconfig/embed.json");
module.exports = {
  name: "kick", //the Command Name
  category: "Moderation", //the Command Category [OPTIONAL]
  aliases: [], //the command aliases [OPTIONAL]
  cooldown: 2, //the Command Cooldown (Default in /botconfig/settings.json) [OPTIONAL]
  description: "sets channel slowmode", //the command description [OPTIONAL]
  memberpermissions: [], //Only allow members with specific Permissions to execute a Commmand [OPTIONAL]
  requiredroles: [
    "880565815123005545",
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
  argsmissing_message: "Akhi Specify a user!", //Message if the user has not enough args / not enough plus args, which will be sent, leave emtpy / dont add, if you wanna use command.usage or the default message! [OPTIONAL]
  argstoomany_message: "You are having too many arguments for this Command!", //Message if the user has too many / not enough args / too many plus args, which will be sent, leave emtpy / dont add, if you wanna use command.usage or the default message! [OPTIONAL]
  run: async (client, message, args, plusArgs, cmdUser, text, prefix) => {
      let member = message.mentions.members.first();
      
      const sp = new MessageEmbed()
      .setColor("RED")
      .setDescription("akhi Specify a user")
      
  
      if(!member)
      return message.reply({ embeds: [sp]})
      
        if(member == null)
        return message.channel.send('null')
  
        const urs = new MessageEmbed()
        .setColor("RED")
        .setDescription("hahah akhi you cant kick yourslef")
        
        if(member === message.member)
        return message.reply({ embeds: [urs]})
        
  
        const position = new MessageEmbed()
        .setColor("RED")
          .setDescription("akhi you cannot kick somone who is higher rank then you")
          
          
        if(member.roles.highest.position >= message.member.roles.highest.position)
        return message.reply({ embeds: [position]})
  
        const kickable = new MessageEmbed()
        .setColor("RED")
        .setDescription("habibi you cannot kick him")
  
        if(!member.bannable)
         return  message.reply({ embeds: [kickable]})
        

        let reason = args.slice(1).join(' ');
        if(!reason) reason = '`None`';
        if(reason.length > 1024 ) reason = reason.slice(0, 1021) + '...';
        await member.kick({reason: reason});
        const embed3 = new MessageEmbed()
          .setColor("RED")
          .setDescription(` ${member} was kickned, he most have said somthing`)
          .addField('Reason', `${reason}`)
          .setFooter(message.member.displayName, message.author.displayAvatarURL({dynamic: true}))
        message.channel.send({
          embeds: [embed3],
          
        });
        await message.delete()
    
    }
      
      }  

