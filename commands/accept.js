
const Discord = require('discord.js')
const stickets = require('./stickets')

module.exports = { 
    category: 'support',
    description: 'opens support ticket',

    permissions: ['ADMINISTRATOR'],

    callback: async ({ message, client }) => {

        ticketowner = message.content.slice(10)

        const notfound = new Discord.MessageEmbed()
        .setColor("RED")
        .setTitle("Support Ticket Not Found")
        .setDescription("The Support Ticket you called couldn't be found, check the spelling of the name")

        const found = new Discord.MessageEmbed()
        .setColor("GREEN")
        .setTitle("Support Ticket Found")
        .setDescription("Creating Support Ticket")

        const creation = new Discord.MessageEmbed()
        .setColor("PURPLE")
        .setTitle("Welcome To your Support Ticket")
        .setDescription("Ticket ID: " + ticketowner)

        if(!stickets.includes(ticketowner)) {
            message.channel.send({embeds: [notfound]})
            return;
        }

        message.channel.send({embeds: [found]})

        const guild = client.guilds.cache.get('933841641830244422') 
        
        const ticketchannel = await guild.channels.create('s-ticket: ' + ticketowner, {
            
            type: 'GUILD_TEXT',
            parent: '934281156571037708',
            permissionOverwrites: [
                {
                    id: message.guild.roles.everyone.id,
                    deny: 'VIEW_CHANNEL'
                },
                {
                    id: ticketowner,
                    allow: 'VIEW_CHANNEL'
                },

            ]
        })
        ticketchannel.send({embeds: [creation]})
        ticketchannel.send("<@" + ticketowner + ">")
        ticketchannel.send("<@" + message.author.id + ">")
    }
}