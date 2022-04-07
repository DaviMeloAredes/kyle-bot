import fG from 'fast-glob'
import { Client } from 'discord.js'
import { EventInterface } from '../index'

export default async (client: Client) => {
  const eventFile = await fG('src/events/**/**')

  eventFile.forEach(async (event: string) => {
    const dir = `../../${event}`
    const eventProps: EventInterface = (await import(dir)).default

    client.on(eventProps.name, (action: any) => {
      eventProps.exec(action)
    })
  })
}