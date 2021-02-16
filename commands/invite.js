const { MessageEmbed } = require("discord.js");

module.exports = {
  info: {
    name: "invite",
    description: "To add/invite the bot to your server",
    usage: "",
    aliases: ["inv"],
  },

  run: async function (client, message, args) {
    
    //set the permissions id here (https://discordapi.com/permissions.html)
    var permissions = 607505473;
    
    let embed = new MessageEmbed()
    .setTitle(`${client.user.username} Invite Link`)
    .setDescription(`[Click Here To Invite Me In Your Server](https://discord.com/oauth2/authorize?client_id=${client.user.id}&permissions=${permissions}&scope=bot)`)
    .setColor("RED")
    return message.channel.send(embed);
  },
}; 