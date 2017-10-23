var d = new Date();
var user = "<@userID>";
const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('Ready for expeditions!');
});

client.on('ready', () => {
  client.user.setGame('Climbing a mountain')
})

client.on('message', message => {
    if (message.content === '>ping') {
    	message.reply(':ping_pong: pong!');
  	}
});
client.on('message', message => {
    if (message.content === '>tussle') {
    	message.reply('ya wanna tussle?');
  	}
});
client.on('message', message => {
    if (message.content === '>play') {
    	message.reply('https://www.roblox.com/games/1008098480/Mount-Kilimanjaro');
  	}
});
client.on('message', message => {
    if (message.content === '>group') {
    	message.reply('https://www.roblox.com/My/Groups.aspx?gid=3457860');
  	}
});
client.on('message', message => {
    if (message.content === '>date') {
    	message.reply(`${d}`);
  	}
});
client.on('message', message => {
    if (message.content === '>rsummit') {
        message.reply(`${Math.floor((Math.random() * 10) + 1)}`);


client.login(process.env.BOT_TOKEN);
