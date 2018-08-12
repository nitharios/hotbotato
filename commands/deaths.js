module.exports = {
  name: 'deaths',
  description: 'Lists all user deaths in ascending order.',
  args: false,
  execute(channel, holder, tracker) {
    let currentDeaths = tracker;
    currentDeaths[holder.username] = currentDeaths[holder.username] ? currentDeaths[holder.username]++ : 1;
    
    console.log(currentDeaths);
    
    channel.send(`\`${JSON.stringify(currentDeaths)}\``);
    return currentDeaths;

  }
}