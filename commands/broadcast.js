const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

      if(!message.member.hasPermission("ADMINISTRATOR")) return;
          const text = args.slice(1).join(" ");
          if(text.length < 0) return message.channel.send("Cannot Announcer When Your Announce Is Not Long");
          const colour = args.slice(2).join(" ");
          const embed = new Discord.RichEmbed()
          .setColor("0x" + "")
          .setTitle("Announcement:")
          .setDescription(text);
          message.channel.send(`@everyone`)
          message.channel.send({embed})

}

module.exports.help = {
  name: "bc"
}
