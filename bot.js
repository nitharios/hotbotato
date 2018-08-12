const Discord = require('discord.js');
const fs = require('fs');
const {
  prefix,
  token
} = require('./config.json')

const links = [
  'http://api.giphy.com/v1/gifs/search?q=konosuba%20explosion&api_key=RZVJZWX9duzqE8SGkqMVf1EZgndURlxA&limit=1',
  "http://api.giphy.com/v1/gifs/search?q=explosion&api_key=RZVJZWX9duzqE8SGkqMVf1EZgndURlxA&limit=1",
  "http://api.giphy.com/v1/gifs/search?q=bird-explosion-parakeet&api_key=RZVJZWX9duzqE8SGkqMVf1EZgndURlxA&limit=1",
  "http://api.giphy.com/v1/gifs/search?q=explosion-1985-commando&api_key=RZVJZWX9duzqE8SGkqMVf1EZgndURlxA&limit=1",
  "http://api.giphy.com/v1/gifs/search?q=dog%20explosion%20&api_key=RZVJZWX9duzqE8SGkqMVf1EZgndURlxA&limit=1"
]

const bot = () => {
  const client = new Discord.Client();
  client.commands = new Discord.Collection();

  let timerTicking = false;
  let potatoHolder;
  let deathTracker = {};

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
    
      } else if (commandName === 'ignite' && !timerTicking) {
        botatoTimer(message.channel);
        potatoHolder = command.execute(message, args);
        return potatoHolder;
        
      } else if (commandName === 'pass' && message.author.username === potatoHolder.username) {
        potatoHolder = command.execute(message, args, potatoHolder);        
        return potatoHolder;

      } else if (commandName !== 'ignite' && commandName !== 'pass') {
        return command.execute(message, args);
      }

    } else {
      return reply.send(`That is not a valid command, ${ message.author }!`);
    }
  })

  botatoTimer = (channel) => {
    const clock = Math.floor(Math.random() * 10 + 5);
    timerTicking = true;

    setTimeout(() => {
      timerTicking = false;
      // channel.send(`BOOM!!! ${potatoHolder} exploded into smithereens!`)
      channel.send(generateMessage(5));
      generateGIF(channel);
      const command = client.commands.get('deaths');
      deathTracker = command.execute(channel, potatoHolder, deathTracker);
      potatoHolder = '';
    }, clock * 1000);
  }

  generateMessage = (num) => {
    let str = `BOOM!!! ${potatoHolder} exploded into smithereens!\r\n`;

    for (let i = 0; i < num; i++) {
      str += str;
    }

    return str;
  }

  generateGIF = (channel) => {
    const index = Math.floor(Math.random() * links.length);
    const url = links[index];

    let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
    let xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", url, false); // false for synchronous request
    xmlHttp.send(null);
    let response = JSON.parse(xmlHttp.responseText);
    return channel.send(response.data[0].url);
  }

  return {
    client: client
  }
}

bot().client.login(token);
