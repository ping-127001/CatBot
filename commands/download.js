const Discord = require('discord.js')

const config = require("../json/config.json");

module.exports =
 {
    name: 'download',
    description: 'Downlaod Nyx',
    execute(message, args, client) 
    {
        try
        {
            var embed = new Discord.MessageEmbed()
            .addFields
            (
                { name: "Download Nyx", value: "N/A"},
                { name: "Downlaod Nyx source", value: "https://github.com/ping-127001/Nyx/archive/refs/heads/main.zip"},
                { name: "Downlaod Nyx Manager", value: "N/A"},
                { name: "Downlaod Nyx Manager source", value: "https://github.com/ping-127001/NyxManager/archive/refs/heads/main.zip"},
            )
            .setColor('BLACK');
            message.channel.send(embed);
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