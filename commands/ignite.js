module.exports = {
  name: 'ignite',
  description: 'ignites the bot',
  execute(message, args) {
    message.channel.send(`${message.author} has started Hot Botato! Hooray!`);
  }
}