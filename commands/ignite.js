module.exports = {
  name: 'ignite',
  description: 'Ignites the botato!',
  args: false,
  execute(message, args) {
    const reply = message.channel;
    reply.send(`${message.author} has started Hot Botato! Catch me!`);
    // var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
    // var xmlHttp = new XMLHttpRequest();
    // xmlHttp.open("GET", "http://api.giphy.com/v1/gifs/search?q=super%20saiyan%20transform&api_key=RZVJZWX9duzqE8SGkqMVf1EZgndURlxA&limit=1", false); // false for synchronous request
    // xmlHttp.send(null);
    // var response = JSON.parse(xmlHttp.responseText);
    // console.log(response.data[0].url);
    // reply.send(response.data[0].url);
    return message.author;
  }
}