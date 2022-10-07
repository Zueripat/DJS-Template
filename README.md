# Discord Bot Template TS & MySQL 

![Typescript & MySQL](https://aristorinjuang.com/images/og/typescript_mysql.jpg)

## Discord Setup

---
1. Create a new application on the [Discord Developer Portal](https://discord.com/developers/applications)
2. Go to the Bot tab and create a new bot
3. Copy the token and client ID and paste them into the `.env` file
4. Open up your Console and navigate to where you have your project folder
5. Run `git clone https://github.com/Zueripat/DJS-Template.git` to clone the repository
6. Open the folder in your IDE and run `npm install` to install all the dependencies
7. Run `npm run start` to start the bot

- [ ] Discord Setup

## MySQL Setup

---
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
