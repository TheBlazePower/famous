const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  //.blazepvp apakah <question>
  if(!args[2]) return message.reply("Tolong Kasih Pertanyaan Yang Banyak \nContoh: .legacypvp apakah Kita BOleh Makan?");
  let replies = ["Ya", "Tidak", "Tidak Mungkin", "Mungkin", "Sangat Mungkin", "Sangat Tidak Mungkin"];

  let result = Math.floor((Math.random() * replies.length));
  let question = args.slice(1).join(" ");

  let blazeembed = new Discord.RichEmbed()
  .addField(":question: Question:", question)
  .addField(":pencil: Answer:", replies[result])
  .setFooter(`Question ${message.author.tag}`)

  message.channel.send(blazeembed);

}

module.exports.help = {
  name:"famous"
}
