const Discord = require("discord.js");
const bot = new Discord.Client();
const fs = require('fs');
let XP = JSON.parse(fs.readFileSync('./XP.json', 'utf8'));
 

 bot.login("NDIzNDc2OTIyNjE4NjA5Njc0.DYq5KA.Jwta1n_LSUS1o7zsy_LIz0vF0pg")


bot.on("message", msg => {
let prefix = "R.";

console.log(0)
if(!msg.content.startsWith(prefix)) return;

console.log(0.1)
if(msg.author.id != "235144525763444736") return;

console.log("help command")
if (msg.content.startsWith(prefix + "help")) {
    msg.reply("Here are my commands: R.help,")
}

let userData = XP[msg.author.id];
if (!userData) userData = {XP: 10, level: 1};

let curLevel = Math.floor(0.1 * Math.sqrt(userXP));
if (curLevel > userData.level) {
    userData.level = curLevel;
    msg.reply('You have lvled ^ to lvl **${curLevel}**!');
}

console.log("level")
if (msg.content.startsWith(prefix + "level")) {
    msg.reply(`You are lvl ${userData.level}, with ${userData.XP} XP Right Now.`);
}

if (!XP[msg.author.id]) XP[msg.author.id] = {XP: 0, level: 0}



console.log("Slime")
if (msg.content.startsWith(prefix + "killSlime")) {
    userData.XP += 10
    msg.channel.sendMessage(`${msg.author} has killed a Slime!`)
}

console.log(XP)
fs.writeFile('./XP.json', JSON.stringify(XP), console.error);

});
