const Discord = require('discord.js')

const config = require("../json/config.json");

module.exports =
 {
    name: 'invite',
    description: 'Send the Discord invite',
    execute(message, args, client) 
    {
        try
        {
            message.delete();
            var embed = new Discord.MessageEmbed()
            .setTitle("Nyx Bot")
            .setFooter("Here is our invite")
            .setColor('BLACK');
            message.channel.send(embed);
            message.channel.send(config.sinvite);
        }
        catch (ex)
        {
            message.delete();
            var embed = new Discord.MessageEmbed()
            .setTitle("Nyx Bot")
            .setDescription("An error occured")
            .setFooter(ex)
            .setColor('BLACK');
            message.channel.send(embed);
        }
    }
}