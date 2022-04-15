import fG from 'fast-glob'
import { Message } from 'discord.js'
import { CommandInterface } from '../index'

export default async (message: Message, prefix: string) => {
  const commandFile = await fG('src/commands/**/**')

  commandFile.forEach(async (command: string) => {
    const dir = `../../${command}`
    const commandProps: CommandInterface = (await import(dir)).default

    if (message.content.toUpperCase().startsWith(`${prefix}${commandProps.name.toUpperCase()}`)) {
      if (commandProps.config!.permissionsToExecute!.length > 0) {
        const memberHavePermissions = (await import('./utils/checkNeededPermissions')).default(message.member!, commandProps.config!.permissionsToExecute!, message)

        if (!memberHavePermissions) {
          return message.reply('You don\'t have the required permissions to execute this command.')
        }
      }

      if (commandProps.config!.useMentionedUser && !message.mentions.members!.first()) {
        return message.reply(':x: | Specify a member.')
      } else {
        commandProps.exec(message)
      }
    }
  })
}
