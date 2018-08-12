module.exports = {
    name: 'track',
    description: 'tracks the current holder of the potato.',
    execute(message, args) {
        message.channel.send(`${potatoHolder} has the potato!`);
    }
}