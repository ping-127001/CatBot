const Discord = require('discord.js')

const request = require('request');

const isReachable  = require('is-reachable');

const config = require("../json/config.json");

let options = {json: true};

var url = `http://127.0.0.1:8080/API/status`;

module.exports =
 {
    name: 'status',
    description: 'Get data from the status API',
    execute(message, args, client) 
    {
        message.channel.send("https://http.cat/102");
        try
        {
            (async () => 
            {
                var reachable = await isReachable(url)
                if (reachable)
                {
                        request(url, options, (res, json) => 
                        {
                            if (json.statusCode == 200)
                            {
                                message.channel.send("https://http.cat/200");
                                var embed = new Discord.MessageEmbed()
                                .addFields
                                (
                                    { name: "API Status Code", value: '200'},
                                    { name: "Client Version", value: json.body.version},
                                    { name: "Server Version", value: json.body.serverversion},
                                    { name: "Downtime", value: json.body.downtime},
                                    { name: "Message", value: json.body.msg},
                                    )
                                    .setFooter(`Nyx status recieved from ${url}`)
                                    .setColor('BLACK');
                                    message.channel.send(embed);
                            }
                        })
            }
    
            if (!reachable)
            {
                message.channel.send("https://http.cat/521");
                var embed = new Discord.MessageEmbed()
                .addFields
                (
                { name: "Message", value: url + ' is unreachable/or unresponsive'},
                )
                .setColor('BLACK');
                message.channel.send(embed); 
            }
            })();
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