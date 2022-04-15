import { Message, MessageEmbed } from 'discord.js'

export default {
  name: 'ban',
  config: { useMentionedUser: true, permissionsToExecute: ['BAN_MEMBERS'] },
  exec: async (message: Message) => {
    const mentionedMember = message.mentions.members!.first()

    if (!mentionedMember!.bannable) {
      return message.reply(":x: | I'm not allow to ban this member.")
    }

    await mentionedMember!.send(
      {
        embeds: [
          new MessageEmbed()
            .setColor('RANDOM')
            .setTitle(':warning: | Ban')
            .setDescription(`You was banned from \`${message.guild!.name}\`.`)
        ]
      }).then(() => {
      mentionedMember!.ban().then(() => {
        return message.reply('⚖️ | The member was banned. He was also warned by DM.')
      })
    })
  }
}
