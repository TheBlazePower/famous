const Discord = require("discord.js");
const cpu = process.cpuUsage().system / 1024 / 1024;

module.exports.run = async (bot, message, args) => {
    message.delete()
    let bicon = bot.user.displayAvatarURL;
    let botembed = new Discord.RichEmbed()
    .setTitle(`${bot.user.username} Information`)
    .setDescription("==========================================")
    .setColor("#15f153")
    .setThumbnail(bicon)
    .addField(":computer: Information:", `Name:${bot.user.username} \nCreated: ${bot.user.createdAt}`)
    .addField(":shield: Owner:", "Discord: <@380325037955219456>", true)
    .addField(":keyboard: Developer:", `<@357772791187243008>`, true)
    .addField(":pencil: Library:", "Discord.JS 11.3.2 \nCoded: Atom \nUsing: Node.Js", true)
    .addField(":pager: Version:", "Currently: BETA 3.3 \nNext: BETA 3.4", true)
    .addField(":file_folder: CPU Usage:", `${Math.round(cpu * 100) / 100}%`, true)
    .addField(":file_folder: Memory Usage:", "6.89MB")
    .addField(":dividers: New Feature:", "========================================== \n|.ping| \n|.invite| \n==========================================")
    .setFooter(`${bot.user.username}, Was Currently BETA Mode`);

    message.channel.send(botembed);
}

module.exports.help = {
  name:"botinfo"
}
