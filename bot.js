const Discord = require('discord.js');
const fs = require('fs');

const commandNames = {
  IGNITE: 'ignite',
  PASS: 'pass',
  HELP: 'help',
}

const {
  prefix,
  token
} = require('./config.json');

const bot = () => {
  const { IGNITE, PASS, HELP } = commandNames;
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
    const commandName = args.shift().toLowerCase();
    const command = client.commands.get(commandName);
    const reply = message.channel;

    if (client.commands.get(commandName)) {
      if (command.args && !args.length) {
        return reply.send(`You didn't provide any arguments, ${ message.author }`);
      
      } else {        
        return command.execute(message, args);  
      }

    } else {
      return reply.send(`That is not a valid command, ${ message.author }!`);
    }
  })

  return {
    client: client
  }
}

bot().client.login(token);
