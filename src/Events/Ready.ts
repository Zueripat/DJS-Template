import { Client } from "discord.js";
import deploy from '../deploy';
import Log from '../Handlers/Log';
import { startup } from '../Handlers/db/Functions';

module.exports = {
    name: 'ready',
    once: true,

    /**
     * @param {Client} client
     */

    async execute(client: Client) {
        const { user, ws } = client;
        await deploy();
        await startup(client);
        Log(`Logged in as ${user?.tag}`, 0, 'Ready');

        setInterval(() => {
            const ping = ws.ping;

            user?.setPresence({
                activities: [
                    {
                        name: `Ping: ${ping}ms`,
                        type: 3
                    }
                ]
            });
        }, 60_000);
    }
};
