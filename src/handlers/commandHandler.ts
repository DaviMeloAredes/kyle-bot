import fG from 'fast-glob'
import { Message } from 'discord.js'
import { CommandInterface } from '../index'

export default async (message: Message, prefix: string) => {
  const commandFile = await fG('src/commands/**/**')

  commandFile.forEach(async (command: string) => {
    const dir = `../../${command}`
    const commandProps: CommandInterface = (await import(dir)).default

    if (typeof commandProps.isCommand !== 'undefined') {
      if (message.content.toUpperCase().startsWith(`${prefix}${commandProps.name.toUpperCase()}`)) {
        commandProps.exec(message)
      }
    }
  })
}
