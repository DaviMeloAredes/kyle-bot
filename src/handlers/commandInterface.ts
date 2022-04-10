import { PermissionResolvable } from 'discord.js'

interface ConfigInterface {
  useMentionedUser?: boolean,
  permissionsToExecute?: PermissionResolvable[]
}

export interface CommandInterface {
  name: string
  config?: ConfigInterface
  exec: any
}
