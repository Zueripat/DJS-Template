# Discord Bot Template TS & MySQL
This is a template for a discord bot with typescript and mysql. It includes examples for commands, events, and a database connection. It also includes a `.env` for the bot token and database connection. This template is meant to be used with the [discord.js](https://discord.js.org/#/) library.

## Discord Setup

1. Create a new application on the [Discord Developer Portal](https://discord.com/developers/applications)
2. Go to the Bot tab and create a new bot
3. Copy the token and client ID and paste them into the `.env` file
4. Open up your Console and navigate to where you have your project folder
5. Run `git clone https://github.com/Zueripat/DJS-Template.git` to clone the repository
6. Open the folder in your IDE and run `npm install` to install all the dependencies
7. Run `npm run start` to start the bot

## MySQL Setup

1. Download [MySQL Workbench](https://dev.mysql.com/downloads/workbench/)
2. Download [Docker](https://www.docker.com/products/docker-desktop)
3. Open your Terminal and run following Commands:
   1. `docker run -p 3306:3306 -p 33060:33060 --name=mysql57 -d mysql/mysql-server:5.7`
   2. `docker exec -it mysql57 mysql -uroot -p`
   3. `ALTER USER 'root'@'localhost' IDENTIFIED BY 'NEW_USER_PASSWORD';`
   4. `UPDATE mysql.user SET host = '%' WHERE user = 'root';`
4. Finish the Discord Setup
5. Open the `.env` file and fill in the MySQL credentials
6. Run `npm run start` to start the bot

## Check List
- [ ] Discord Setup
- [ ] MySQL Setup

*If you have any questions, feel free to ask in the [Discord Server](https://discord.gg/ZAdxxMSVDk) or create an issue on this GitHub repository.*
