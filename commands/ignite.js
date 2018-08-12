module.exports = {
  name: 'ignite',
  description: 'Ignites the botato!',
  args: false,
  execute(message, args) {
    message.channel.send(`${message.author} has started Hot Botato! Catch me!`);
  }
}