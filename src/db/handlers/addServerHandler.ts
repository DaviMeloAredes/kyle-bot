import { Message } from 'discord.js'
import { ServerModel } from '../models/serverModel'

export default async (message: Message) => {
  const servers = await ServerModel.find({})

  console.log(servers)

  if (!servers.some(server => server.id === message.guild!.id)) {
    const serverDoc = await new ServerModel({
      sv_id: message.guild!.id,
      prefix: '=',
      users: [
        {
          id: message.author.id
        }
      ]
    })
    await serverDoc.save()
  }
}
