const Discord = require('discord.js')
const stickets = require('./stickets')

module.exports = { 
    category: 'support',
    description: 'closes support ticket',

    permissions: ['ADMINISTRATOR'],

    callback: ({message}) => {

        const cant = new Discord.MessageEmbed()
        .setColor("RED")
        .setTitle("Can't Close Channel")
        .setDescription("Channel Isn't a Ticket")

        if(message.channel.parent.id !== '934281156571037708'){
            message.channel.send({embeds: [cant]})
            return;
        }

        const ticketowner = message.channel.name.slice(9)
        ticketowner.toString()
        const temp = stickets.indexOf(ticketowner)
        stickets.splice(temp, 1)
        message.channel.delete()

    }
}