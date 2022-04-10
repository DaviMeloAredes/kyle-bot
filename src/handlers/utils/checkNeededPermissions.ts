import { GuildMember, Message, PermissionResolvable } from 'discord.js'

export default (member: GuildMember, permsArr: PermissionResolvable[], message: Message) => {
  let memberHaveRequiredPerms = true

  permsArr.forEach(perm => {
    if (!member.permissions.has(perm)) {
      memberHaveRequiredPerms = false
    }
  })

  return memberHaveRequiredPerms
}
