var Discord = require('discord.io');
var logger = require('winston');
var auth = require('./auth.json');
var d = new Date();
var user = "<@userID>";
client.login(process.env.BOT_TOKEN);

// Configure logger settings
logger.remove(logger.transports.Console);
logger.add(logger.transports.Console, {
    colorize: true
});
logger.level = 'debug';
// Initialize Discord Bot
var bot = new Discord.Client({
   token: auth.token,
   autorun: true
});
bot.on('ready', function (evt) {
    logger.info('Connected');
    logger.info('Logged in as: ');
    logger.info(bot.username + ' - (' + bot.id + ')');
});
bot.on('message', function (user, userID, channelID, message, evt) {
    // Our bot needs to know if it will execute a command
    // It will listen for messages that will start with `>`
    if (message.substring(0, 1) == '>') {
        var args = message.substring(1).split(' ');
        var cmd = args[0];
       
        args = args.splice(1);
        switch(cmd) {
            // >ping
            case 'ping':
                bot.sendMessage({
                    to: channelID,
                    message: ':ping_pong: Pong!'
                });
            break;
			case 'about':
				bot.sendMessage({
					to:	channelID,
					message: '***I am the Expedition Bot for Kilimanjaro, I shall be a robot guide assisting you all! Created by Thinzy***'
				});
			break;
			case 'play':
				bot.sendMessage({
					to: channelID,
					message: 'https://www.roblox.com/games/1008098480/Mount-Kilimanjaro'
				});
			break;
			case 'group':
				bot.sendMessage({
					to:	channelID,
					message: 'https://www.roblox.com/My/Groups.aspx?gid=3457860'
				});
			break;	
			case 'date':
				bot.sendMessage({
					to: channelID,
					message: `the date is ${d}`
				});
			break;
			case 'tussle':
				bot.sendMessage({
					to: channelID,
					message: `you wanna tussle, ${user}?`
				});
            // Case commands go here
         }
     }
});
