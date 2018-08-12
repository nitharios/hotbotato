module.exports = {
  name: 'ignite',
  description: 'List of Hot Botato commands and their descriptions.',
  args: false,
  execute(message, args) {
    message.channel.send(`\`List of commands: \r\n\
1. =ignite: Ignites the botato!\r\n
2. =pass [user]: Pass the botato to a specified user.
3. =help: Information about Hot Botato.\``);
  }
}