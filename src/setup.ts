import 'dotenv/config'
import { Client, Intents } from 'discord.js'

const client = new Client({ intents: 
  [ Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MESSAGES 
  ]
})

client.login(process.env.ACCESS_TOKEN).then(console.log)