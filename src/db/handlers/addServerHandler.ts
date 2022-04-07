import { Message } from 'discord.js'
import { ServerModel } from '../models/serverModel'

export default async (message: Message, cb?: any) => {
  const servers = await ServerModel.find({})
  if (!servers.some(server => server.id === message.guild!.id)) {
    const serverDoc = await new ServerModel({
      id: message.guild!.id,
      users: [
        {
          id: message.author.id
        }
      ]
    })
    await serverDoc.save()
  }
}
