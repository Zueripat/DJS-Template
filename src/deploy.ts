import 'dotenv/config';
import { join } from 'path';
import { readdirSync } from 'fs';
import { REST, Routes, Collection } from 'discord.js';
import Log from './Handlers/Log';

// Load all the commands (Slash Commands)
const rest = new REST({ version: '10' }).setToken(`${process.env.DISCORD_TOKEN}`);

export default async function registerApplicationCommands() {
    const commands = new Collection();
    const commandsPath = join(__dirname, 'Commands');
    const commandFiles = readdirSync(commandsPath).filter(file => file.endsWith('.ts'));

    for (const file of commandFiles) {
    	const filePath = join(commandsPath, file);
    	const command = require(filePath);
    	commands.set(command.data.name, command);
    };
    try {
        Log('Started refreshing application (/) commands.', 0, 'Load Commands');

        await rest.put(
            Routes.applicationGuildCommands(`${process.env.CLIENT_ID}`, `${process.env.GUILD_ID}`),
            { body: commands.map((command: any) => command.data.toJSON()) },
        );

        Log('Successfully reloaded application (/) commands.', 0, 'Load Commands');
    } catch (error) {
        console.error(error);
    }
}