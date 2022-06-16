const Discord = require('discord.js')

const request = require('request');

const config = require("../json/config.json");

let options = {json: true};

var url = `https://raw.githubusercontent.com/ping-127001/NyxBackend/main/backend.json`;

module.exports =
 {
    name: 'status',
    description: 'Get the client status',
    execute(message, args, client) 
    {
        try
        {
            message.channel.send("https://http.cat/102");
            request(url, options, (res, json) => 
            {
                setTimeout(() => 
                {
                    if (json.body.msg != "N/A")
                    {
                        var embed = new Discord.MessageEmbed()
                        .addFields
                        (
                            { name: "Client Version", value: json.body.version},
                            { name: "Server Version", value: json.body.serverversion},
                            { name: "Downtime", value: json.body.downtime},
                            { name: "Message", value: json.body.msg},
                        )
                        .setFooter(`Nyx status recieved from ${url}`)
                        .setColor('BLACK');
                        message.channel.send(embed);
                    }

                    else if (json.body.msg == "N/A")
                    {
                        var embed = new Discord.MessageEmbed()
                        .addFields
                        (
                            { name: "Client Version", value: json.body.version},
                            { name: "Server Version", value: json.body.serverversion},
                            { name: "Downtime", value: json.body.downtime},
                            { name: "Message", value: "None"},
                        )
                        .setFooter(`Nyx status recieved from ${url}`)
                        .setColor('BLACK');
                        message.channel.send(embed);
                    }
                }, 1000);
            })
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