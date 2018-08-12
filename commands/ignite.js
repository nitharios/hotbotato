module.exports = {
  name: 'ignite',
  description: 'Ignites the botato!',
  args: false,
  execute(message, args) {
    const reply = message.channel;
    reply.send(`${message.author} has started Hot Botato! Catch me!`);
    return message.author;
  }
}