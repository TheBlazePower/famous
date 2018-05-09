const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    message.delete()
    let botembed = new Discord.RichEmbed()
    .setTitle(`${bot.user.username}, Command List`)
    .setDescription("==========================================")
    .setColor("#15f153")
    .addField("General:", "========================================== \n`.invite: For Invite Link` \n========================================== \n`.help: For Command Information` \n========================================== \n`.report <@user> <reason>: For Report User Breaking Rules` \n========================================== \n`.botinfo: For Who Created This Bot` \n========================================== \n`.serverinfo: About Server Info` \n========================================== \n`.legacypvp apakah <text>: For 8ball Command` \n========================================== \n`.weather <kota>: Untuk Melihat Cuaca Keberadaan Kota` \n========================================== \n`.about: For Command Information` \n==========================================", true)
    .addField("Moderator:", "========================================== \n`.kick <@user> <reason>: For Kick A User` \n========================================== \n`.ban <@user> <reason>: For Banned A User` \n========================================== \n`.bc <text>: For Announcement` \n========================================== \n`.clear <1-100>: For Clearing All Message` \n========================================== \n`.addrole <@user> <role>: For Give Role To User` \n========================================== \n`.removerole <@user> <role>: For Removing User Roles` \n==========================================", true)
    .setFooter(`${bot.user.username}, Was Currently BETA Mode`);

    message.author.send(`Please Wait To Sending Help Page`).then(msg => msg.edit(botembed));
    message.channel.send(`Please Wait 5 Second To Sending a Message`).then(msg => msg.edit(`${message.author} | ***Sending Help Page To Your DM***`));

}

module.exports.help = {
  name:"help"
}
