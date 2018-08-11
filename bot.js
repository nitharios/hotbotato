const Discord = require('discord.js');
const fs = require('fs');

const commandNames = {
  IGNITE: 'ignite',
  PASS: 'pass'
}

const {
  prefix,
  token
} = require('./config.json');

const bot = () => {
  const { IGNITE, PASS } = commandNames;
  const client = new Discord.Client();
  client.commands = new Discord.Collection();

  const commandFiles = fs.readdirSync('./commands').filter((file) => {    
    return file.endsWith('.js');
  });  
  
  for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
  }  
  
  client.on('ready', () => {
    console.log('Ready!');
  });

  client.on('message', (message) => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if (client.commands.get(command)) {
      return client.commands.get(command).execute(message, args);
    } else {
      return;
    }
  })

  return {
    client: client
  }
}

bot().client.login(token);
