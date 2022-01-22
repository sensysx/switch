const Discord = require('discord.js')
const stickets = require('./stickets')

module.exports = { 
    category: 'support',
    description: 'tells mods and creates a support ticket',

    callback: ({ message, client }) => {
        if(message.author.bot) return;

        const embed1 = new Discord.MessageEmbed()
        .setColor("GREEN")
        .setTitle("Support Request")
        .addField("Someone is Asking For Support", "Say dc/accept " + message.author.id + " to open a support ticket") 
        .addField("Requested By", message.author.tag , true)

        const embed2 = new Discord.MessageEmbed()
        .setColor("GREEN")
        .setTitle("Support Request")
        .addField("The Staff has recieved the message", "Please wait till a Staff member can assist you") 
        .addField("Requested By", message.author.tag , true)

        const embed3 = new Discord.MessageEmbed()
        .setColor("RED")
        .setTitle("Support Request")
        .addField("You Already Sent a Request", "Please wait till a Staff member can assist you") 
        .addField("Requested By", message.author.id , true)

        if(stickets.includes(message.author.id)) {
            message.channel.send({embeds: [embed3]}); 
            return;
        }
        
        
        const sc = client.guilds.cache.get('933841641830244422').channels.cache.get('934020986142097408')

        sc.send({embeds: [embed1]})
        message.channel.send({embeds: [embed2]});

        stickets.push(message.author.id) 
        console.log()
        
    }
}