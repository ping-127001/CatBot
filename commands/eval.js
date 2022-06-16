const Discord = require('discord.js')

const config = require("../json/config.json");


module.exports = 
{
    name: 'eval',
    description: 'Run js code from a discord message',
    execute(message, args, client) 
    {
        try
        {
            if (message.author.id == config.owner)
            {
                
                var result = message.content.split(" ").slice(1).join(" ")
                let evaled = eval(result);
    
                var embed = new Discord.MessageEmbed()
                .setTitle("Cat Bot Evalatuion")
                .setFooter(result)
                .setDescription("Javascript executed")
                .setColor('BLACK');
                message.channel.send(embed);
            }
            else
            {
                var embed = new Discord.MessageEmbed()
                .setTitle("Cat Bot Evalatuion")
                .setFooter("You do not have permission to run evalauation")
                .setColor('BLACK');
                message.channel.send(embed);
            }
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