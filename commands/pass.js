module.exports = {
  name: 'pass',
  description: 'If you are holding the botato, passes the botato to a user in the same channel.',
  args: true,
  execute(message, args) {
    const reply = message.channel;    
    const target = message.channel.members.find(member => {
      return member.user.username === args[0];
    });

    if (!target) {
      return reply.send(`Oh no, ${message.author}! That person doesn't exist :(`);
    
    } else if (target.user.username === message.author.username) {
      return reply.send(`You can't pass to yourself, ${message.author}!`);

    } else if (target.bot) {
      return reply.send(`You can't pass to a bot, ${message.author}!`);

    } else if (target.presence.status === 'offline') {
      return reply.send(`That person isn't online ${message.author}`);

    } else {
      potatoHolder = target;
      var timer = setTimeout(function () { reply.send(`${target} owe's Nathan $5`); }, 5000);
      return reply.send(`${ message.author } passes to ${ target }`);
    
    }
  }
}