var d = new Date();
var images = ['https://imgur.com/mETXc2R', 'https://imgur.com/YJvo7Fb', 'https://imgur.com/2l52LK4', 'https://imgur.com/CYxOhyC', 'https://imgur.com/pt0Kd82', 'https://imgur.com/ExuGbkZ', 'https://imgur.com/D9dn2yy', 'https://imgur.com/gluYJeT', 'https://imgur.com/8AiNyVc', 'https://imgur.com/UtgK0tJ'];
var image = images[Math.floor(Math.random() * (images.length))];
console.log(images.length);
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
        message.reply(`${image}`);
    }
});    
 
client.login(process.env.BOT_TOKEN);
