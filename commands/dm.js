const Discord = require('discord.js')

const config = require("../json/config.json");

module.exports =
 {
    name: 'dm',
    description: 'dm a mentioned user',
    execute(message, args, client) 
    {
        var debugg = false;

        try
        {
            if (debugg)
            {
                var embed = new Discord.MessageEmbed()
                .setTitle("Cat Bot")
                .setDescription("dm disabled for debugging")
                .setColor('BLACK');
                message.channel.send(embed);
                return;
            }
            else
            {
                message.delete();
                if (message.author.id == config.owner)
                {
                    let id = message.content.split(" ");
                    id.shift();
                    id = id.join(" ")
    
                    let msg = message.content.split("  ");
                    msg.shift();
                    msg = msg.join("  ")
    
                    client.users.fetch(id, false).then((user) => 
                    {
                        user.send(msg);
                    })
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