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
              'https://imgur.com/QR3q6ck',
              'https://imgur.com/wBJZGr7',
              'https://imgur.com/WZp9B3q',
              'https://imgur.com/0JD8q2g',
              'https://imgur.com/zqFjeNd',
              'https://imgur.com/CnkxDKo',
              'https://imgur.com/zXxoZmL',
              'https://imgur.com/LZlay6C',
              'https://imgur.com/a/aMr4M',
              'https://imgur.com/a/uBXMI',
              'https://imgur.com/UtgK0tJ'];
const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = ">"
const sql = require('sqlite3').verbose();
sql.open("./score.sqlite");
const embed = new Discord.RichEmbed()
  .setTitle("Commands List")
  .setAuthor("Expi | Expedition Bot", "https://imgur.com/qVuDedv.png")
  .setColor(0x00AE86)
  .setDescription("The complete commands list, the most useful commands are at the top")
  .setFooter("Created by Thinzy, for Newmentor", "https://imgur.com/qVuDedv.png")
  .setImage("https://imgur.com/aoISFl6.png")
  .setThumbnail("https://imgur.com/qVuDedv.png")
  .setTimestamp()
  .setURL("https://discord.js.org/#/docs/main/indev/class/RichEmbed")
  .addField(">play",
    "Gives you the link to play Mount Kilimanjaro")
  .addField(">group",
     "Gives you the link to the group of Mount Kilimanjaro")
  .addField(">climbers", 
     "Shows you the amount of climbers in the server")
  .addField(">ett",
     "Shows you the Expedition Time Table")
  .addField(">date", 
     "Tells you the date and time, the timezone is EBST (Expi Bot Standard Time)")
  .addField(">ping", 
     "Shows you the latency of the bot")
  .addField(">rate", 
     "Give Expi a rating")
  .addField(">rsummit", 
     "Gives you random summit pictures")
  .addField(">tussle", 
     "The bot will ask if you wanna tussle");

client.on('ready', () => {
  client.user.setGame(`Climbing a mountain`);
  console.log('Ready for expeditions!');
})

client.on('message', message => {
    if (message.author.bot) return;
    if (message.channel.type !== "text") return;
    if (message.content === '>ping') {
    	message.reply(`:ping_pong: Pong! It took ${Math.round(client.ping)}ms to climb the mountain!`);
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
      message.reply({embed});
    }
    if (message.content === '>rate') {
      message.reply('Rate the bot!')
      .then (function(message) {
      message.react("❤")
      message.react("💩")
      });  
    }
    if (message.content === '>stop3xpi') {
     client.channels.get('352513633693073408').send('Expedition Canceled, sorry in advance!');
    }
    if (message.content === '>ett') {
     message.reply('https://imgur.com/a/iisf8');
    }
    if (message.content === '>onl1n3') {
     client.channels.get('352513398904324100').send('I am coming on too, expect me to be there :D');
    }
    
    sql.get(`SELECT * FROM scores WHERE userId ="${message.author.id}"`).then(row => {
    if (!row) {
      sql.run("INSERT INTO scores (userId, points, level) VALUES (?, ?, ?)", [message.author.id, 1, 0]);
    } else {
      let curLevel = Math.floor(0.1 * Math.sqrt(row.points + 1));
      if (curLevel > row.level) {
        row.level = curLevel;
        sql.run(`UPDATE scores SET points = ${row.points + 1}, level = ${row.level} WHERE userId = ${message.author.id}`);
        message.reply(`well done!You have leveled up to **${curLevel}**! Keep on climbin'!`);
      }
      sql.run(`UPDATE scores SET points = ${row.points + 1} WHERE userId = ${message.author.id}`);
    }
  }).catch(() => {
    console.error;
    sql.run("CREATE TABLE IF NOT EXISTS scores (userId TEXT, points INTEGER, level INTEGER)").then(() => {
      sql.run("INSERT INTO scores (userId, points, level) VALUES (?, ?, ?)", [message.author.id, 1, 0]);
    });
  });

  if (!message.content.startsWith(prefix)) return;

  if (message.content.startsWith(prefix + "level")) {
    sql.get(`SELECT * FROM scores WHERE userId ="${message.author.id}"`).then(row => {
      if (!row) return message.reply("Your current level is 0");
      message.reply(`Your current level is ${row.level}`);
    });
  } else

  if (message.content.startsWith(prefix + "points")) {
    sql.get(`SELECT * FROM scores WHERE userId ="${message.author.id}"`).then(row => {
      if (!row) return message.reply("sadly you do not have any points yet!");
      message.reply(`you currently have ${row.points} points, good going!`);
    });
  }
});



client.login(process.env.BOT_TOKEN);
