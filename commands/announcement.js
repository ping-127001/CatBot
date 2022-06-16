const Discord = require('discord.js')

const config = require("../json/config.json");

module.exports =
 {
    name: 'announcement',
    description: 'Send an announcement',
    execute(message, args, client) 
    {
        try
        {
            var server = message.guild.id;
            if (server = "962133594229321829")
            {
                if (message.author.id == config.owner)
                {
                    let user = message.member.displayName;
                    let id = message.author.id;
                    let sentence = message.content.split(" ");
                    sentence.shift();
                    sentence = sentence.join(" ")
            
                    message.channel.send("@everyone");
        
                    var embed = new Discord.MessageEmbed()
                    .setTitle("Cat Bot Announcement")
                    .setDescription(sentence)
                    .setFooter("This message was made by " + user + "#" + id)
                    .setColor('BLACK');
                    message.delete();
                    message.channel.send(embed);
                }
                else
                {
                    channel.message.send("You do not have permissions to send announcements.");
                }
            }
            else return;
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
