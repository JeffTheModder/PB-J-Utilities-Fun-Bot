const fs = require('fs')

const {Client, Collection, Intents} = require('discord.js')
const client = new Client({intents: [
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MESSAGES
]})

client.commands = new Collection()
client.aliases = new Collection()

fs.readdir('./events/', (err, files) => {
	const eventHandler = require('./handler/eventHandler.js')
	eventHandler(err, files, client)
})

fs.readdir('./commands/', (err, files) => {
	const commandHandler = require('./handler/commandHandler.js')
	commandHandler(err, files, client)
})

client.login(process.env.TOKEN)