const Discord = require('discord.js');
const client = new Discord.Client();

const {
  prefix,
  token
} = require('./config.json');

client.on('ready', () => {
  console.log('Ready!');
});

client.on('message', (message) => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;
  
  const args = message.content.slice(prefix.length).split(/ +/);
  const command = args.shift().toLowerCase();

  // if (message.content.startsWith(`${prefix}ping`)) {
  //   // message.channel.send('Pong.');
  //   message.channel.send(`This server's name is: ${message.guild.name}`);
  // }

  if (!args.length) {
    return message.channel.send(`No arguments found. Try again ${message.author}`);
  }

  switch (command) {
    case 'ignite':
      return message.channel.send('Command "IGNITE" authorized.');
    
    case 'pass':
      return message.channel.send('Command "PASS" authorized.');
      
    default:
      return message.channel.send('No matching command found!');
      
  }

})

client.login(token);
