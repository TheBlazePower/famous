const botconfig = require("./botconfig.json");
const Discord = require("discord.js");
const fs = require("fs");
const bot = new Discord.Client({disableEveryone: true});
bot.commands = new Discord.Collection();

fs.readdir("./commands/", (err, files) => {

  if(err) console.log(err);
  let jsfile = files.filter(f => f.split(".").pop() === "js")
  if(jsfile.length <= 0){
    console.log("Couldn't find commands.");
    return;
  }

  jsfile.forEach((f, i) =>{
    let props = require(`./commands/${f}`);
    console.log(`${f} loaded!`);
    bot.commands.set(props.help.name, props);
  });
});

// 1) ES6 introduces shorter, optional arrow functions
bot.on('typingStart', (channel, user) => {
  console.log(`${user.username} is typing in ${channel.name}`);

});

// 1) ES6 introduces shorter, optional arrow functions
bot.on('typingStop', (channel, user) => {
  console.log(`${user.username} Just Send A Message In ${channel.name}`);

});

bot.on(`guildBanAdd`, (guild, user) => {
  console.log(`${user.username} Has Been Blacklisted`);

});

bot.on("guildMemberAdd", async member => {
  console.log(`${member} Has Joined Server.`);

  var role = member.guild.roles.find(`name`, "Member");

  member.addRole(role)

  let channel = member.guild.channels.find(`name`, "join-left");
  let memberavatar = member.user.avatarURL
      if (!channel) return;
      let embed = new Discord.RichEmbed()
      .setColor(`RANDOM`)
      .setThumbnail(memberavatar)
      .addField("Name:", `${member}`)
      .addField(`Welcome To Our:`, `${member.guild.name} | **Server**`)
      .addField("Commands:", "**.help For Help Page | .about For Command Information**")
      .addField("The Server Is Now:", `${member.guild.memberCount}` + " **members**")
      .setFooter(`${bot.user.username}, Was Currently BETA Mode`)
      .setTimestamp();
  channel.send(embed);

});

bot.on("guildMemberRemove", async member => {
  console.log(`${member.id} Has Left Server.`);

  let channel = member.guild.channels.find(`name`, "join-left");
  let memberavatar = member.user.avatarURL
      if (!channel) return;
      let embed = new Discord.RichEmbed()
      .setColor(`RANDOM`)
      .setThumbnail(memberavatar)
      .addField("Name:", `${member}`)
      .addField(`Lefting Our:`, `${member.guild.name}` + " | **Server**")
      .addField("The Server Is Now:", `${member.guild.memberCount}` + " **members**")
      .setFooter(`${bot.user.username}, Was Currently BETA Mode`)
      .setTimestamp();
  channel.send(embed);

});

bot.on("channelCreate", async channel => {

  console.log(`${channel.name} Telah Diciptakan Tuan LegacyPvP.`);

  let sChannel = channel.guild.channels.find(`name`, "general");
  sChannel.send(`${channel} Telah Diciptakan`);

});

bot.on("channelDelete", async channel => {

  console.log(`${channel.name} Telah dihapus Tuan LegacyPvP.`);

  let sChannel = channel.guild.channels.find(`name`, "general");
  sChannel.send(`#${channel.name} Telah dihapus`);

});

bot.on("channelUpdate", async channel => {

  console.log(`${channel.name} Telah diperbarui Menjadi ${channel} Tuan LegacyPvP.`);

  let sChannel = channel.guild.channels.find(`name`, "general");
  sChannel.send(`${channel.name} Telah Diperbarui Menjadi ${channel}`);

});

bot.on("ready", async () => {
  console.log(`${bot.user.username} is online on ${bot.guilds.size} servers!`);
  bot.user.setActivity("Type: .help for Help List | Type: .about For Command Information", {type: "PLAYING"});

});

bot.on("message", async message => {
  if(message.author.bot) return;
  if(message.channel.type === "dm") return;

  let prefix = botconfig.prefix;
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);
  let commandfile = bot.commands.get(cmd.slice(prefix.length));
  if(commandfile) commandfile.run(bot,message,args);

});

bot.on(`message`, function(message) {
    const bannedWords = [
      "goblok",
      "gblk",
      "gvlk",
      "geblek",
      "gblek",
      "gblok",
      "anjing",
      "anjeng",
      "njing",
      "anzing",
      "anzeng",
      "bangsat",
      "bngst",
      "bego",
      "bgo",
      "bege",
      "vego",
      "monyet",
      "nyet",
      "onyet",
      "brengsek",
      "bajingan",
      "tolok",
      "tlol",
      "tll",
      "tolel",
      "telel",
      "ngentod",
      "ngntd",
      "ngetod",
      "ngentot",
      "ngtd"
    ];

    if(bannedWords.some(word => message.content.includes(word))) {
      message.delete()
      message.reply("You Have Been Warned By Me, Please Do Not **Badword**")
  };

  if (message.content === '<@436689899979145216> shutdown') {
  message.channel.send(`Shutting Down My System.. Goodbye Everyone, See You Soon Tomorrow`);
  }

  if (message.content === '<@436689899979145216> lol im just joking') {
  message.channel.send(`What The Heck, Why?, I Were Just Wanna Shutdown My System`);
  }

  if (message.content === `<@436689899979145216> you\'re system was controlled by me`) {
  message.channel.send(`Oh.. So How Did You Control Me?`);
  }

  if (message.content === '<@436689899979145216> im your creator, damn it') {
  message.channel.send(`O_O omg, im so sorry sir, i didn't know if my system was only me`);
  }

});

bot.login(tokenfile.token);
