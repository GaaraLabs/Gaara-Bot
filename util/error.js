const { MessageEmbed } = require("discord.js")

/**
 * Easy to send errors because am lazy to do the same things
 * @param {String} text - Message which is need to send
 * @param {TextChannel} channel - A Channel to send error
 */
module.exports = async (text, channel) => {
    let embed = new MessageEmbed()
    .setColor("RED")
    .setDescription(text)
    .setFooter("Something went wrong :(")
    await channel.send(embed)
}
