const Discord = require('discord.js');

require('dotenv').config();
const client = new Discord.Client();
// const messageAttachment = new Discord.MessageAttachment();


require('./events/ready')(client)
require('./events/awesome')(client)
require('./events/iAmJoke')(client)
// require('./events/chocolate')(client, messageAttachment)
require('./events/welcome')(client)


client.login(process.env.TOKEN);