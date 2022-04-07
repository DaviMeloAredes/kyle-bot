import fG from 'fast-glob'
import { Message } from 'discord.js'
import { CommandInterface } from '../index'

export default async (message: Message) => {
  const commandFile = await fG('src/commands/**/**')

  commandFile.forEach(async (command: string) => {
    const dir = `../../${command}`
    const commandProps: CommandInterface = (await import(dir)).default

    if (message.content.toUpperCase() === commandProps.name.toUpperCase()) {
      commandProps.exec(message)
    }
  })
}