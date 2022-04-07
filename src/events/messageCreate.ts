import { Message } from 'discord.js'
import { ServerModel } from '../db/models/serverModel'

export default {
  name: 'messageCreate',
  exec: async (message: Message) => {
    if (message.author.bot) return

    const server = await ServerModel.findOne({ sv_id: message.guild!.id })

    if (!server) {
      return (await import('../db/handlers/addServerHandler')).default(message).then(async () => {
        const createdServer = await ServerModel.findOne({ sv_id: message.guild!.id })

        return (await import('../handlers/commandHandler')).default(message, createdServer.prefix)
      })
    }

    (await import('../handlers/commandHandler')).default(message, server.prefix)
  }
}
