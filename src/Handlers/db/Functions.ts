import Query from './Query';
import { Client } from 'discord.js';
import Log from '../Log';

async function startup(client: Client) {
    client.guilds.cache.forEach(async (guild) => {
        await Query(`CREATE TABLE IF NOT EXISTS Guilds (
            id VARCHAR(255) PRIMARY KEY,
            prefix VARCHAR(255) DEFAULT '!',
            welcomeChannel VARCHAR(255) DEFAULT 'none',
            welcomeMessage VARCHAR(255) DEFAULT 'Welcome {user} to ${guild.name}!',
            welcomeEnabled BOOLEAN DEFAULT false,
            leaveChannel VARCHAR(255) DEFAULT 'none',
            leaveMessage VARCHAR(255) DEFAULT 'Goodbye {user} from ${guild.name}!',
            leaveEnabled BOOLEAN DEFAULT false,
            modLogChannel VARCHAR(255) DEFAULT 'none',
            modLogEnabled BOOLEAN DEFAULT false,
            modRole VARCHAR(255) DEFAULT 'none',
            adminRole VARCHAR(255) DEFAULT 'none',
            muteRole VARCHAR(255) DEFAULT 'none',
            xpEnabled BOOLEAN DEFAULT false,
            lvlUpMessage VARCHAR(255) DEFAULT 'Congratulations {user} for reaching level {level}!',
            xpCooldown INT DEFAULT 0,
            xpGain INT DEFAULT 25
        )`).catch((err) => { Log(err, 2, 'Database'); });

        await Query(`INSERT IGNORE INTO Guilds (id) VALUES ('${guild.id}')`)
        .catch((err) => { Log(err, 2, 'Database'); });
    });
}

export { startup };