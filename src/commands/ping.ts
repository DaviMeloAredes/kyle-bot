import { Message } from 'discord.js'

export default {
  name: 'ping',
  isCommand: true,
  exec: async (message: Message) => {
    message.reply('Pong!')
  }
}
