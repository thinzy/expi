var d = new Date();
var images = ['https://imgur.com/mETXc2R',
              'https://imgur.com/YJvo7Fb',
              'https://imgur.com/2l52LK4',
              'https://imgur.com/CYxOhyC',
              'https://imgur.com/pt0Kd82',
              'https://imgur.com/ExuGbkZ',
              'https://imgur.com/D9dn2yy',
              'https://imgur.com/gluYJeT',
              'https://imgur.com/8AiNyVc',
              'https://imgur.com/UtgK0tJ'];
const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = ">"

client.on('ready', () => {
  client.user.setGame(`Climbing a mountain`);
  console.log('Ready for expeditions!');
})

client.on('message', message => {
    if (message.content === '>ping') {
    	message.reply(':ping_pong: pong!');
  	}
    if (message.content === '>tussle') {
    	message.reply('ya wanna tussle?');
  	}
    if (message.content === '>play') {
    	message.reply('https://www.roblox.com/games/1008098480/Mount-Kilimanjaro');
  	}
    if (message.content === '>group') {
    	message.reply('https://www.roblox.com/My/Groups.aspx?gid=3457860');
  	}
    if (message.content === '>date') {
    	message.reply(`${d}`);
  	}
    if (message.content === '>rsummit') {
      message.reply(`${images[Math.floor(Math.random() * (images.length))]}`);
    }
    if (message.content === '>climbers') {
      message.reply(`there are ${message.guild.memberCount} climbers!`);
    }
    if (message.content === '>commands') {
      message.reply({embed: {
      color: '650FCB',
      author: {
      name: client.username,
      icon_url: client.user.avatarURL
      },
      description: "Commands list",
      fields: [{
      name: ">play"
      value: "Gives you the roblox game link"
      },
      {
      name: ">group"
      value: "Gives you the roblox group link"
      },
      {
      name: ">climbers"
      value: "Gives you the amount of climbers in the server"
      },
      {
      name: ">date"
      value: "Gives you the date, the timezone is EBST (Expi Bot Standard Time)"
      },
      {
      name: ">ping"
      value: "Shows you the latency"
      },
      {
      name: ">rsummit"
      value: "Shows you a random summit picture"
      },
      {
      name: ">tussle"
      value: "Fun CMD, the bot will ask if you wanna tussle"
      }
      ],
      footer: {
      icon_url: client.user.avatarURL,
      text: "Created by Thinzy, for Newmentor"
      }
    }
    });
});
  

client.login(process.env.BOT_TOKEN);
