const {
  MessageEmbed,
  MessageButton,
  Interaction,
  DiscordAPIError,
} = require("discord.js");
const paginationEmbed = require("discordjs-button-pagination");

const { normalizeUnits } = require("moment");
const config = require("../../botconfig/config.json");
const ee = require("../../botconfig/embed.json");
module.exports = {
  name: "ibn-hadi",
  category: "Deviants",
  aliases: [],
  cooldown: 2,
  usage: "",
  setDescription: "Posts Videos of Muhammad Ibn Hadi",
  argstoomany_message: "You are having too many arguments for this Command!", //Message if the user has too many / not enough args / too many plus args, which will be sent, leave emtpy / dont add, if you wanna use command.usage or the default message! [OPTIONAL]
  run: async (
    client,
    message,
    args,
    plusArgs,
    cmdUser,
    text,
    prefix,
    Interaction
  ) => {
    const button = new MessageButton()
      .setCustomId("1")
      .setLabel("⏪")
      .setStyle("SECONDARY");
    const button2 = new MessageButton()
      .setCustomId("2")
      .setLabel("⏩")
      .setStyle("SECONDARY");
    const timeout = 10;

    const embed = new MessageEmbed()
      .setColor("#303136")
      .setTitle(`Muhammad Ibn Hadi Refuted`)
      .addFields({
        name: "Videos",
        value: `
  [The End of the road for the Mu'safiqah in the Fitna of Muhammad ibn Hadi - Abu Hakeem Bilaal](https://youtu.be/zMUgEGxKRnE) \n
  [The Turmoil Surrounding Muhammad Bin Hadi – Abu Khadeejah Abdul Waahid](https://youtu.be/N3ICMxFCo8w) \n
  [Meaning Of 'Aahir In The Hadeeth "Any Slave That Gets Married..." - al-'Allaamah Saalih al-Fawzaan](https://youtu.be/IMjW_VZxKa8) \n
  [Comments On The Vilifications Of Muḥammad Bin Hādī By Al-Imām Rabī' Bin Hādī 'Umayr Al-Madkhalī](https://youtu.be/on7q6oBaZRw) \n
  [|The truth has become evident in this fitnah of Muhammad bin hadi: Muhammad Al Fulani حفظه الله](https://youtu.be/UwSFvg7Xs4M)

   `,
      });

    const embed2 = new MessageEmbed()
      .setColor("#303136")
      .setTitle(`Muhammad Ibn Hadi Refuted`)
      .setDescription("")
      .addFields({
        name: "Refutations",
        value: `
shaykh Rabīʿ bin Hādī: Partisanship is from the Affairs of the People of Jāhiliyyah, None Show Partisanship Save the Insane or Foolish \n

Partisanship is from the affairs of the Jāhiliyyīn (People of Jāhiliyyah), and it is from their deeds. As for the truthful Muslim,
 he must exonerate himself from partisanship and from [any and all] oppositions to what Muḥammad (صلى الله عليه وسلم) came with. Partisanship 
 is reprehensible. None shows partisanship except a disturbed or reprehensible one. Disturbed, meaning insane (majnūn), afflicted with 
 nervous disorder, or a fool. None shows partisanship except a fool or a disturbed one. \n

        `,
      });
    const embed3 = new MessageEmbed()
      .setColor("#303136")
      .setTitle(`Muhammad Ibn Hadi Refuted`)
      .addFields({
        name: "Refutations",
        value: ` 
        So it is obligatory for a Muslim to exonerate himself [from partisanship to anything or anyone] so that he is not a fool or insane, 
        given to nervous disorder. He should be intelligent, seeking truth, and when he knows the truth, he holds on to it even if all those
        on earth oppose him. He should not show partisanship, not to an imām, nor to a follower [of an īmām], nor to a truthful one or to a 
        liar. Rather, he holds fast to the truth [alone]. \n
         
        [Fatāwā fil-ʿAqīdah wal-Manhaj (Second Sitting)] (https://rabee.net/alfatawi/نرجو-منكم-أن-تبينوا-لنا-خطر-التعصب-خاصة/)
         
        [@AbuIyaadSP](https://t.me/abuiyaadsp)

        `,
      });
    const embed4 = new MessageEmbed()
      .setColor("#303136")
      .setTitle(`Muhammad Ibn Hadi Refuted`)
      .setDescription(`📌 Imām Rabī‘ Al-Madkhalī, may Allāh preserve him: Muḥammad ibn Hādī opposed a (Aṣl) foundation from the (Uṣūl) foundations of the Qur'ān and Sunnah \n

      The Ḥaddādī questioner: \n
      
      "Perhaps you can clarify (this issue) with evidence, may Allāh bless you - just as you have taught us our Shaykh -?" \n
      
      Shaykh Rabī‘, may Allāh preserve him: \n
      
      "The evidence is the Qur'ān." \n
      
      Another questioner: \n
      
      "Is one who follows Muḥammad ibn Hādī exit from Salafīyah?!" \n
      
      Shaykh Rabī‘, may Allāh preserve him: \n
      
      "How?" \n
      
      The Ḥaddādī questioner: \n
      
      "(Is) one who follows Muḥammad ibn Hādī..." \n
      
      Another Ḥaddādī Muṣa‘fiq said: \n
      
      "We don't follow him. We don't blindly follow him (Muḥammad ibn Hādī)! In following, we don't follow anyone!!" \n
      
      The Ḥaddādī questioner: \n
      
      "In these statements." \n
      
      Shaykh Rabī‘, may Allāh preserve him:  `);

    const embed5 = new MessageEmbed()
      .setColor("#303136")
      .setTitle(`Muhammad Ibn Hadi Refuted`)
      .setDescription(`"What's the evidence? May Allāh bless you." \n

      Shaykh Rabī‘, may Allāh preserve him:  \n
      
      "The evidence is the Qur'ān." \n
      
      The Ḥaddādī questioner:
      
      "He hasn't opposed a (Aṣl) foundation from the (Uṣūl) foundations of the Sunnah and the Jamā‘ah, may Allāh bless you. Just as you taught us this O our Shaykh." \n
      
      Shaykh Rabī‘, may Allāh preserve him:  \n
       
      "He has opposed the Qur'ān. (Is) the Qur’ān not the foundation?!" \n
      
      The Ḥaddādī questioner: \n
      
      "Yes. Correct."
      
      Shaykh Rabī‘, may Allāh preserve him:  \n
      
      "This goes against the Qur'ān and Sunnah!!" \n
      
      The Ḥaddādī questioner: \n
      
      ((Silence!!)) `);

    const embed6 = new MessageEmbed()
      .setColor("#303136")
      .setTitle(`Muhammad Ibn Hadi Refuted`)
      .setDescription(`"Do you follow him (Muḥammad ibn Hādī) in (making an accusation of fornication/adultery) slander?" \n
          
      "Do you follow him (Muḥammad ibn Hādī) in (making an accusation of fornication/adultery) slander and false statements?" \n
      
      The Ḥaddādī questioner: \n
      
      "Does one exit the circle of Ahl-us-Sunnah Wal Jamā‘ah (if one follows Muḥammad ibn Hādī)?" \n
      
      Shaykh Rabī‘, may Allāh preserve him:  \n
      
      "He has exited it. He has exited it.." \n
      
      The Ḥaddādī questioner: \n
      
      
      
      Shaykh Rabī‘, may Allāh preserve him:  \n
      
      "Leave off playing games! Fear Allāh within yourselves. Fear Allāh within yourselves. Fear Allāh within yourselves." \n
      
      Translated by
      Abū Marthad Munthir Haile Al-Amrīkī Al-Irītrī`);

    const pages = [embed, embed2, embed3, embed4, embed5, embed6];
    const buttonList = [button, button2];

    paginationEmbed(message, pages, buttonList);
  },
};
