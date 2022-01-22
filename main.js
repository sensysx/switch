const WOK = require('wokcommands')
const path = require('path')

const Discord = require('discord.js');
const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] });

client.once('ready', () => {
    console.log('Doms Cat is Online');

    new WOK(client, {
        commandsDir: path.join(process.cwd(), 'commands'),
      })
      .setDefaultPrefix('dc/')
});

client.login('OTMzODUyNTIyODMyMDc2ODEx.Yenj7w.VfKssCfZQM9DAumprSUPj7TU5Z8');