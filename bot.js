const Discord = require('discord.js');
const fs = require('fs');
const {
  prefix,
  token
} = require('./config.json');

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
      const command = client.commands.get('deaths');
      deathTracker = command.execute(channel, potatoHolder, deathTracker);

      let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
      let xmlHttp = new XMLHttpRequest();
      xmlHttp.open("GET", "http://api.giphy.com/v1/gifs/search?q=konosuba%20explosion&api_key=RZVJZWX9duzqE8SGkqMVf1EZgndURlxA&limit=1", false); // false for synchronous request
      xmlHttp.send(null);
      let response = JSON.parse(xmlHttp.responseText);
      console.log(response.data[0].url);
      // return channel.send(response.data[0].url);
    }, clock * 1000);
  }

  generateMessage = (num) => {
    let str = `BOOM!!! ${potatoHolder} exploded into smithereens!\r\n`;

    for (let i = 0; i < num; i++) {
      str += str;
    }

    return str;
  }

  return {
    client: client
  }
}

bot().client.login(token);
