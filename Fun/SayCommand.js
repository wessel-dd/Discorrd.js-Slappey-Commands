const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require("discord.js")

module.exports = class SayCommand extends BaseCommand {
  constructor() {
    super('say', 'fun', []);
  }

  run(client, message, args) {
   if (!message.guild) return message.channel.send(`Try again if you are in a server channel!`);
   const messageTosay = args.join(" ")
   const sayembed = new Discord.MessageEmbed()
   .setTitle(`${message.author.tag} said ${messageTosay}`)
   .setColor("RANDOM")
   .setTimestamp();
   try {
     message.channel.send(sayembed)
   } catch (err) {
     console.log(err)
     message.channel.send("Error with that")
   }
  }
}