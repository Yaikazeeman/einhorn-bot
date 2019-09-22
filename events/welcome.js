
module.exports = (client) => {
    client.on('guildMemberAdd', member => {
        const channel = member.guild.channels.find(ch => ch.name === 'member-log');
        if (!channel) return;
        channel.send(`Welcome to our Ironhack-discord-group, ${member}. We have different channels for projects, helpfull-links and gaming. I'm the Einhorn-bot, everyone is welcome to program new features for me. So I will eventually become a master-bot that take over the world! *evil laughter* But anyway, Welcome to the family ${member}! With love, Einhorn`);
  });
}

