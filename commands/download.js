const Discord = require('discord.js');

var url = `http://127.0.0.1:8080/API/download`;

const request = require('request');

const isReachable  = require('is-reachable');

let options = {json: true};

const config = require("../json/config.json");

module.exports =
 {
    name: 'download',
    description: 'Get links to download Nyx',
    execute(message, args, client) 
    {
        try
        {
            message.channel.send("https://http.cat/102");
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
                                { name: "Nyx Download", value: json.body.nyx},
                                { name: "Nyx Source", value: json.body.nyxsrc},
                                { name: "Nyx Manager", value: json.body.nyxmanager},
                                { name: "Nyx Manager Source", value: json.body.nyxmanagersrc},
                                { name: "Nyx Builder", value: json.body.nyxbuilder},
                                { name: "Nyx Builder Source", value: json.body.nyxsbuildersrc},
                            )
                                .setFooter(`Nyx download links recieved from ${url}`)
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