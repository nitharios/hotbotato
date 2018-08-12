module.exports = {
  name: 'help',
  description: 'List of Hot Botato commands and their descriptions.',
  args: false,
  execute(message, args) {

    message.channel.send(`\`\`\`Hot Botato is a twist on the original Hot Potato game. A random timer will be set and you have to pass the botato (bot) around unti
it explodes! If the botato explodes while you're holding it, YOU GO BOOM!!! Pass it on quick!

List of commands:

1. ignite: Ignites the botato!
2. pass [user]: Pass the botato to a specified user.
3. help: Information about Hot Botato.\`\`\``);
  }
}