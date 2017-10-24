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
});
  
client.on(`message`, async (message) => {
	if (message.author.bot) return;
	if (!message.content.startsWith(prefix)) return;
	
	let command = message.content.split(" ")[0];
	command = command.slice(prefix.length);
	
	let args = message.content.split(" ").slice(1);
    
  if (command === "yorn") {
	   if (message.member.hasPermission("Developer")) {
		   const text = args.join(" ")
		   if (text.length < 1) return message.channel.send("You aren't cool enough, sorry!");
		   //const colour = args.slice(2).join("");
		   const embed = new Discord.RichEmbed()
		   .setColor(0x954D23)
		   .setTitle("Yes or No")
		   .setDescription(text);
		   message.channel.send("@climbers")
		   message.channel.send({embed})
                   .then(function (message) {
                   message.react("👍")
                   message.react("👎")
		   })

}
client.login(process.env.BOT_TOKEN);
