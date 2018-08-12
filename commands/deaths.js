module.exports = {
  name: 'deaths',
  description: 'Lists all user deaths in ascending order.',
  args: false,
  execute(message, args) {
    message.channel.send(`${message.author} has started Hot Botato! Hooray!`);
  }
}