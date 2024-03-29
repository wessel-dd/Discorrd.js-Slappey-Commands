const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require("discord.js")

module.exports = class EmojifyCommand extends BaseCommand {
  constructor() {
    super('emojify', 'fun', []);
  }

  run(client, message, args) {
    if (!message.guild) return message.channel.send(`Try again if you are in a server channel!`);
    if (!args.length) return message.reply('Please specify a text to translate.')
    const specialCodes = {
      '0': ':zero:',
      '1': ':one:',
      '2': ':two:',
      '3': ':three:',
      '4': ':four:',
      '5': ':five:',
      '6': ':six:',
      '7': ':seven:',
      '8': ':eight:',
      '9': ':nine:',
      '#': ':hash:',
      '*': ':asterisk:',
      '?': ':grey_question:',
      '!': ':grey_exclamation:',
      ' ': '   '
    }
    const text = args.join(" ").toLowerCase().split('').map(letter => {
      if (/[a-z]/g.test(letter)) {
        return `:regional_indicator_${letter}:`
      } else if (specialCodes[letter]) {
        return `${specialCodes[letter]}`
      }
      return letter;
    }).join('');

    message.channel.send(text)
  }
}