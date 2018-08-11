module.exports = {
  name: 'pass',
  description: 'pass to the next user',
  execute(message, args) {
    message.channel.send(`${message.author} passes me over!`);
  }
}