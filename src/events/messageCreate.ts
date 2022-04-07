import { Client, Message } from "discord.js";

export default {
  name: 'messageCreate',
  exec: async (message: Message) => {
    if (message.author.bot) return;

    (await import('../handlers/commandHandler')).default(message)
  }
}