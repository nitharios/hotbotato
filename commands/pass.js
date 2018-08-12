module.exports = {
  name: 'pass',
  description: 'pass to the next user',
  args: true,
  execute(message, args) {
    const reply = message.channel;    
    const target = message.channel.members.find(member => {
      return member.user.username === args[0];
    });

      if (!target) {
      console.log("This is being passed in" + args[0]);
      return reply.send(`Oh no, ${ message.author }! That person doesn't exist :(`);
    
    } else if (target.user.username === message.author.username) {
      return reply.send(`You can't pass to yourself, ${ message.author }!`);

    } else if (target.bot) {
      return reply.send(`You can't pass to a bot, ${ message.author }!`);

    } else {
        potatoHolder = target;
      return reply.send(`${ message.author } passes to ${ target }`);
    
    }
  }
}