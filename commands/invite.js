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
            .setTitle("Cat Bot")
            .setFooter("Here is our invite")
            .setColor('BLACK');
            message.channel.send(embed);
            message.channel.send(config.sinvite);
        }
        catch (ex)
        {
            var embed = new Discord.MessageEmbed()
            .addFields
            (
                { name: "Error", value: ex},
            )
            .setColor('BLACK');
            message.channel.send(embed);
        }
    }
}