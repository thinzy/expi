var d = new Date();
var user = "<@userID>";
const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === '>ping') {
    	message.reply(':ping_pong: pong!');
  	}
client.on('message', message => {
    if (message.content === '>tussle') {
    	message.reply(`ya wanna tussle, ${user}?`);
  	}
});
client.login(process.env.BOT_TOKEN);
