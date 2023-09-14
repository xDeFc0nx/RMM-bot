module.exports = {
  name: "role",

  execute: async (interaction) => {
    // Define the role info embed
    const roleInfoEmbed = {
      content: null,
      embeds: [
        {
          description:
            "• These are the role rewards that you will unlock gradually by staying\nactive and reaching certain levels. Type `/level` in <#895636011823017984> to check your level.\n\n• Note: Every checkpoint you reach, your rewards are stacked. This means you will have the previous permissions along with the new ones.",
          color: 3092790,
          fields: [
            {
              name: "``level 5``",
              value:
                "<:discord_reply_continued:923683428816261180> <@&880565815102046249>\n<:discord_reply_continued:923683428816261180>Hoisted role\n<:discord_reply_continued:923683428816261180>Unlocks the use of\n<:discord_reply:923683615102087178> external emojis",
              inline: true,
            },
            {
              name: "``level 10``",
              value:
                "<@&880565815102046250>\n<:discord_reply_continued:923683428816261180>Hoisted role\n<:discord_reply_continued:923683428816261180> Unlocks the use of \n<:discord_reply:923683615102087178> embeds",
              inline: true,
            },
            {
              name: "``level 15``",
              value:
                "<:discord_reply_continued:923683428816261180> <@&880565815102046251>\n<:discord_reply_continued:923683428816261180>Hoisted role\n<:discord_reply_continued:923683428816261180> Unlocks the use of \n<:discord_reply:923683615102087178>images in <#880565815487918227>",
              inline: true,
            },
            {
              name: "``level 25``",
              value:
                "<:discord_reply_continued:923683428816261180><@&880565815102046252>\n<:discord_reply_continued:923683428816261180>Hoisted role\n<:discord_reply_continued:923683428816261180>Unlocks a custom \n<:discord_reply_continued:923683428816261180>emote of your choice\n<:discord_reply_continued:923683428816261180>for the server \n<:discord_reply:923683615102087178>  redeem)",
              inline: true,
            },
            {
              name: "``level 50``",
              value:
                "<:discord_reply:923683615102087178> <@&880565815102046253>\n<:discord_reply_continued:923683428816261180>Hoisted role\n<:discord_reply_continued:923683428816261180>Unlocks a custom \n<:discord_reply_continued:923683428816261180>reaction for your name \n<:discord_reply:923683615102087178> (Open a ticket to get it)",
              inline: true,
            },
            {
              name: "``level 100``",
              value:
                "<:discord_reply:923683615102087178> <@&880565815102046254>\n<:discord_reply_continued:923683428816261180>Hoisted role\n<:discord_reply_continued:923683428816261180>Unlocks a special role for \n<:discord_reply_continued:923683428816261180>you\n<:discord_reply:923683615102087178>  (Open a ticket to get it)",
              inline: true,
            },
          ],
        },
      ],
      attachments: [],
    };
    module.exports = {
      name: "role",
      run: async (client, interaction) => {
        // Reply with the role info embed (ephemeral means only the user can see it)
        interaction.reply({ embeds: [roleInfoEmbed], ephemeral: true });
      },
    };
  },
};
