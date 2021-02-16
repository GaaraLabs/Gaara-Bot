const { MessageEmbed } = require("discord.js");

module.exports = {
  info: {
    name: "AI",
    description: "our new in development chatbot AI",
    usage: "",
    aliases: ["ai"],
  },

  run: async function (client, message, args) {
    
    let embed = new MessageEmbed()
    .setTitle(`${client.user.username} Artificial Intelligence`)
    .setDescription(`[Click Here To Chat With Me](https://bit.ly/GaaraAI)`)
    .setColor("RED")
    return message.channel.send(embed);
  },
};
