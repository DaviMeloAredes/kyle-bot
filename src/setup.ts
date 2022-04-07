import 'dotenv/config'
import { Client, Intents } from 'discord.js'

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

(async () => {
  (await import('./handlers/eventHandler')).default(client)
})()

client.login(process.env.ACCESS_TOKEN)
