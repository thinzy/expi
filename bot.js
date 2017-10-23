var d = new Date();
var user = "<@userID>";
var '1' = 'https://imgur.com/mETXc2R';
var '2' = 'https://imgur.com/YJvo7Fb';
var '3' = 'https://imgur.com/2l52LK4';
var '4' = 'https://imgur.com/CYxOhyC';
var '5' = 'https://imgur.com/pt0Kd82';
var '6' = 'https://imgur.com/ExuGbkZ';
var '7' = 'https://imgur.com/D9dn2yy';
var '8' = 'https://imgur.com/gluYJeT';
var '9' = 'https://imgur.com/8AiNyVc';
var '10' = 'https://imgur.com/UtgK0tJ';
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
