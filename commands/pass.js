module.exports = {
  name: 'pass',
  description: 'pass to the next user',
  args: true,
  execute(message, args) {
    const reply = message.channel;

    if (args[0]) {
      return reply.send(`${message.author} passes to ${args[0]}!`);
    }
  }
}