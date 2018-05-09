const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    message.delete()
    if(!args[2]) return message.reply("Mohon Maaf Tolong Masukan Alasan Kamu \nContoh: .daftar Aku Ingin Memasuki Team Ini");
    let bicon = bot.user.displayAvatarURL;
    let botembed = new Discord.RichEmbed()
    .setTitle(`${message.guild.name} Daftar-Team`)
    .setDescription("==========================================")
    .setColor("#15f153")
    .addField("Nama:", `${message.author}`)
    .addField("Alasan:", args.join(" "))
    .setFooter(`${bot.user.username}, Was Currently BETA Mode`);

    let daftarchannel = message.guild.channels.find(`name`, "daftar-list");
    if(!daftarchannel) return message.channel.send("Can't find mod-log channel.");

    daftarchannel.send(botembed);
    message.channel.send(`${message.author} Terima Kasih Untuk Mendaftar Team Kami`)
}

module.exports.help = {
  name:"daftar"
}
