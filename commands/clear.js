const Discord = require('discord.js')

const config = require("../json/config.json");

module.exports =
 {
    name: 'clear',
    description: 'Clear specified amount of text',
    execute(message, args, client) 
    {
        try
        {
            let tag = message.author.tag;
            let num = message.content.split(" ");
            num.shift();
            num = num.join(" ")

            if (message.member.hasPermission("ADMINISTRATOR"))
            {
                switch (num)
                {
                    case !num:
                        var embed = new Discord.MessageEmbed()
                        .setTitle("Cat Bot")
                        .setDescription("Please include a number amount of messages to delete. usage: clear {num}")
                        .setColor('BLACK');
                        message.channel.send(embed);  
                        return;
                    
                    case num > 100:
                        var embed = new Discord.MessageEmbed()
                        .setTitle("Cat Bot")
                        .setDescription("Please include a number less than 100")
                        .setColor('BLACK');
                        message.channel.send(embed);
                        return;

                    default:
                        message.channel.bulkDelete(num);
                        var embed = new Discord.MessageEmbed()
                        .setTitle("Cat Bot")
                        .setDescription(`Deleted ${num} messages`)
                        .setFooter(`${tag}` + " deleted messages")
                        .setColor('BLACK');
                        message.channel.send(embed);
                        return;
                }
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