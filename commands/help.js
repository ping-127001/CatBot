const Discord = require('discord.js')

const config = require("../json/config.json");

const announcement = require('../commands/announcement.js');

const clear = require('../commands/clear.js');

const download = require('../commands/download.js');

const eval = require('../commands/eval.js');

const status = require('../commands/status.js');

module.exports =
 {
    name: 'help',
    description: 'Display commands',
    execute(message, args, client) 
    {
        try
        {
            var embed = new Discord.MessageEmbed()
            .addFields
            (
                { name: "Announcement", value: announcement.description},
                { name: "Status", value: status.description},
                { name: "Clear", value: clear.description},
                { name: "Download", value: download.description},
                { name: "Eval", value: eval.description},
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