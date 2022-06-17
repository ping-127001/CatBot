const Discord = require('discord.js');

const config = require("../json/config.json");


const figlet = require('figlet');


module.exports = 
{
    name: 'eval',
    description: 'Execute javascript code [DEVELOPER ONLY]',
    execute(message, args, client) 
    {
        try
        {
            switch (message.author.id)
            {
                case config.owner:
                    var msg = message.content.split(" ").slice(1).join(" ");

                    let evaled = eval(msg);
                    
                    switch (evaled)
                    {
                        case undefined:
                            switch (true)
                            {
                                case msg.includes ("console.log"):
                                    var msgtmp = msg.split('"');
                                
                                    var embed = new Discord.MessageEmbed()
                                    .addFields(
                                    { name: "Code", value: msg},
                                    { name: "Result", value: msgtmp[1]},)
                                    .setColor('BLACK');
                                    message.channel.send(embed);
        
                                    console.clear();
                                    figlet('Cat Bot', function(err, data) 
                                    {
                                        console.log(data);
                                    })
                                    
                                    return;
    
                                    case msg.includes ("function"):
                                    var embed = new Discord.MessageEmbed()
                                    .addFields(
                                        { name: "Code", value: msg},
                                        { name: "Message", value: "Cannot evaluate functions"},)
                                        .setColor('BLACK');
                                        message.channel.send(embed);
                                        return;
                            }
                            return;
                    }
                    
                    var embed = new Discord.MessageEmbed()
                    .setTitle("Cat Bot Evalatuion")
                    .addFields(
                        { name: "Code", value: msg},
                        { name: "Result", value: evaled},)
                        .setColor('BLACK');
                        message.channel.send(embed);
                        return;

                default:
                    var embed = new Discord.MessageEmbed()
                    .setTitle("Cat Bot Evalatuion")
                    .setFooter("You do not have permission to run evalauation")
                    .setColor('BLACK');
                    message.channel.send(embed);
                    return;
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