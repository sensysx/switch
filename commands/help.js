const Discord = require('discord.js')

module.exports = {
    category: 'Help',
    description: 'main help page',

    callback: ({ message }) => {
        if(message.author.bot) return;

        const helpembed1 = new Discord.MessageEmbed()
        .setColor("GREEN")
        .setTitle("Help Page")
        .setDescription("Page 1")
        .addField("Support", "Creates A Support Ticket", false)
        .addField("Help", "Help description", false)
        .addField("Help", "Help description", false)
        .addField("Help", "Help description", false)
        .addField("Help", "Help description", false)
        // 5 per page 
        .addField("Requested By", message.author.tag , true)

        message.channel.send({embeds: [helpembed1]});

        }
    }