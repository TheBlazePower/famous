const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

   message.delete()
   const then = Date.now();
   let embed = new Discord.RichEmbed()
   .setTitle(`Ping Of ${message.author.tag}`)
   .addField(":ping_pong: You\'re Ping:", `${Date.now() - then}ms`)
   .addField(":bar_chart: Latency:", `${bot.ping}ms`);
   message.channel.send(embed);

 }

 module.exports.help = {
   name:"ping"
 }
