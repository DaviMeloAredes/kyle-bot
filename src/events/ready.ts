import { Client } from 'discord.js'

export default {
  name: 'ready',
  exec: (bot: Client) => {
    console.log(`I'm online in the robotic body of ${bot.user!.username}!`)
  }
}
