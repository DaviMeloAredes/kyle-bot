import { Message } from 'discord.js'
import { ServerInterface } from '../interfaces'
import { ServerModel } from '../models/serverModel'

const getServerInfo = async (message: Message): Promise<ServerInterface> => {
  const server = await ServerModel.findOne({ sv_id: message.guild!.id })

  if (server) {
    return await server
  } else {
    (await import('../handlers/addServerHandler')).default(message).then(async () => {
      const createdServer = await ServerModel.findOne({ sv_id: message.guild!.id })
      return await createdServer
    })
  }
}

export { getServerInfo }
