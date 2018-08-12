module.exports = {
  name: 'deaths',
  description: 'Lists all user deaths in ascending order.',
  args: false,
  execute(channel, holder, tracker, str) {
    let currentDeaths = tracker;
    currentDeaths[holder.username] = currentDeaths[holder.username] ? currentDeaths[holder.username]++ : 1;
    
    console.log(currentDeaths);
    
    const players = Object.keys(currentDeaths);
    const deaths = Object.values(currentDeaths);

    for (let i = 0; i < players.length; i++) {
      str += `${players[i]} : ${deaths[i]}\r\n`
    }

    channel.send(str);
    return currentDeaths;

  }
}