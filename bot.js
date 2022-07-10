const Discord = require('discord.js');

const client = new Discord.Client();

const fs = require('fs');

const figlet = require('figlet');

const config = require("./json/config.json");



client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
for (const file of commandFiles)
{
  const command = require(`./commands/${file}`);
  client.commands.set(command.name, command);
}

console.log("");
console.log("Cat Bot attemtping to login")
client.on('ready', () => 
{
  client.user.setPresence(
    { 
        activity: { 
            name: `romance | ${config.prefix} help`, 
            type: 'LISTENING' 
        }, 
        status: "dnd"
    }
) 
    console.clear();
    figlet('Cat Bot', function(err, data) 
    {
      if (err) 
      {
          console.dir(err);
          return;
      }
      console.log(data)
  });
});

client.on('message', (message) => 
{
  if (message.author.bot) 
  {
    return;
  }
  if (message.content.startsWith(config.prefix)) 
  {
    const args = message.content.slice(config.prefix.length).split(/ +/)
    const commandName = args.shift().toLowerCase()
    const command = client.commands.get(commandName) || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName))
    if (command) 
    {
        client.commands.get(command.name).execute(message, args, client);
    }
  }
})

client.login(config.token);