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
var args = Array.prototype.slice.call(arguments);

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
    if (message.content === '>yorn') {
      let modRole = message.guild.roles.find("name", "Developer");
      if(message.member.roles.has(modRole.id)) {
      let announcement = args.join(" ");
      const embed = new Discord.RichEmbed()
      .setColor(0x00AE86)
      .setTimestamp()
      .addField(`Yes or No by ${message.author.username}`, `${announcement}`)
      client.channels.find("name", "announcements").send(embed)
      .then(function (message) {
      message.react("👍")
      message.react("👎")
      message.channel.send(`:ok_hand: Your very important message has been sent to #Announcements`)
      })}}
});    
 
client.login(process.env.BOT_TOKEN);
