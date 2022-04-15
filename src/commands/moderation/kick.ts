import { Message, MessageEmbed } from 'discord.js'

export default {
  name: 'kick',
  config: { useMentionedUser: true, permissionsToExecute: ['KICK_MEMBERS'] },
  exec: async (message: Message) => {
    const mentionedMember = message.mentions.members!.first()

    if (!mentionedMember!.kickable) {
      return message.reply(":x: | I'm not allow to kick this member.")
    }

    await mentionedMember!.send(
      {
        embeds: [
          new MessageEmbed()
            .setColor('RANDOM')
            .setTitle(':warning: | Kick')
            .setDescription(`You was kicked from \`${message.guild!.name}\`.`)
        ]
      }).then(() => {
      mentionedMember!.kick().then(() => {
        return message.reply('⚖️ | The member was kicked. He was also warned by DM.')
      })
    })
  }
}
