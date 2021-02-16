const { MessageEmbed } = require("discord.js");

module.exports = {
  info: {
    name: "stats",
    description: "gives bot's uptime link",
    usage: "",
    aliases: ["st"],
  },

  run: async function (client, message, args) {
    
    let embed = new MessageEmbed()
    .setTitle(`${client.user.username} Uptime Stats`)
    .setDescription(`[Click Here To Check My Uptime](https://bit.ly/GaaraStats)`)
    .setColor("RED")
    return message.channel.send(embed);
  },
};
