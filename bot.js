var d = new Date();
var user = "<@userID>";
const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});


client.on('message', function (user, userID, channelID, message, evt) {
    // Our bot needs to know if it will execute a command
    // It will listen for messages that will start with `>`
    if (message.substring(0, 1) == '>') {
        var args = message.substring(1).split(' ');
        var cmd = args[0];
       
        args = args.splice(1);
        switch(cmd) {
            // >ping
            case 'ping':
                client.sendMessage({
                    to: channelID,
                    message: ':ping_pong: Pong!'
                });
            break;
			case 'about':
				client.sendMessage({
					to:	channelID,
					message: '***I am the Expedition Bot for Kilimanjaro, I shall be a robot guide assisting you all! Created by Thinzy***'
				});
			break;
			case 'play':
				client.sendMessage({
					to: channelID,
					message: 'https://www.roblox.com/games/1008098480/Mount-Kilimanjaro'
				});
			break;
			case 'group':
				client.sendMessage({
					to:	channelID,
					message: 'https://www.roblox.com/My/Groups.aspx?gid=3457860'
				});
			break;	
			case 'date':
				client.sendMessage({
					to: channelID,
					message: `the date is ${d}`
				});
			break;
			case 'tussle':
				client.sendMessage({
					to: channelID,
					message: `you wanna tussle, ${user}?`
				});
            // Case commands go here
         }
     }
});
client.login(process.env.BOT_TOKEN);
