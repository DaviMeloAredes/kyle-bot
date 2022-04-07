import { Message } from 'discord.js'

export default {
  name: 'ping',
  exec: async (message: Message) => {
    message.reply('Pong!')
  }
}
