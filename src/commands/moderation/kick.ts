import { Message, MessageEmbed } from 'discord.js'

export default {
  name: 'kick',
  isCommand: true,
  exec: async (message: Message) => {
    const member = message.member!

    if (!message.mentions.members!.first()) {
      return message.reply(':x: | Specify a member to kick.')
    }

    const mentionedMember = message.mentions.members!.first()

    if (!member.permissions.has('KICK_MEMBERS')) {
      return message.reply(':x: | Your permissions are not sufficient to this command.')
    } else if (!mentionedMember!.kickable) {
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
