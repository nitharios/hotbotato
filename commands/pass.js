module.exports = {
  name: 'pass',
  description: 'If you are holding the botato, passes the botato to a user in the same channel.',
  args: true,
  execute(message, args, holder) {
    const reply = message.channel;    
    const target = message.channel.members.find(member => {
      const pattern = new RegExp(member.user.id);
      return member.user.username === args[0] || pattern.test(args[0]);
    });

    if (!target) {
      reply.send(`Oh no, ${message.author}! That person doesn't exist :(`);
      return holder;
    
    } else if (target.user.username === message.author.username || target.user.id === message.author.id) {
      reply.send(`You can't pass to yourself, ${message.author}!`);
      return holder;

    } else if (target.bot) {
      reply.send(`You can't pass to a bot, ${message.author}!`);
      return holder;

    // } else if (target.presence.status === 'offline') {
    //   reply.send(`That person isn't online ${message.author}`);
    //   return holder;

    } else {
      reply.send(`${message.author} passes to ${target}`);
      return target.user;
    }
  }
}