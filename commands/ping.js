const Discord = require('discord.js')

const config = require("../json/config.json");

module.exports =
 {
    name: 'ping',
    description: 'Display the bots ping',
    execute(message, args, client) 
    {
        try
        {
            message.channel.send('https://http.cat/102').then(msg => 
                {
                const start = message.createdTimestamp;
                const end = msg.createdTimestamp;
                const total = end - start;
                var embed = new Discord.MessageEmbed()
                .addFields
                (
                    { name: "API Latency", value: `${client.ws.ping}`},
                    { name: "Bot Latency", value: `${total} ms`},
                )
                message.channel.send(embed);
            });
        }
        catch (ex)
        {
            message.channel.send("https://http.cat/404");
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