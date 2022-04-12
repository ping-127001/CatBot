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
            let user = message.member.displayName;
            let num = message.content.split(" ");
            num.shift();
            num = num.join(" ")

            if (message.member.hasPermission("ADMINISTRATOR"))
            {
                if (!num)
                {
                    var embed = new Discord.MessageEmbed()
                    .setTitle("Nyx Bot")
                    .setDescription("Please include a number amount of messages to delete. usage: clear {num}")
                    .setFooter("This message was made by " + user)
                    .setColor('BLACK');
                    message.channel.send(embed);
                }
                if (num > 100)
                {
                    var embed = new Discord.MessageEmbed()
                    .setTitle("Nyx Bot")
                    .setDescription("Please include a number less than 100")
                    .setFooter("This message was made by " + user)
                    .setColor('BLACK');
                    message.channel.send(embed);
                }
                else
                {
                    message.channel.bulkDelete(num);
                }
            }
        }
        catch (ex)
        {
            var embed = new Discord.MessageEmbed()
            .setTitle("Nyx Bot")
            .setDescription("An error occured")
            .setFooter(ex)
            .setColor('BLACK');
            message.channel.send(embed);
        }
    }
}