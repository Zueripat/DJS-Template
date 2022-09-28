# Discord Bot Template (Typescript & MySQL)

## Discord

Download the Repository by executing the following Command in your Terminal `git clone https://github.com/Zueripat/D.JS-Bot-Template.git`

After installing the Source Code, you need to install the Dependencies. Navigat to the Folder where you cloned the Repository and execute the following Command `npm install` or `yarn install`

Now you only have to fill in your Bot Token and your MySQL Credentials in the `.env` file.

## MySQL

Download Workbench: `https://dev.mysql.com/downloads/workbench/`

Download Docker: `https://www.docker.com`

Open the Terminal and run the following Commands:

1: `docker run -p 3306:3306 -p 33060:33060 --name=mysql57 -d mysql/mysql-server:5.7`

2: `docker exec -it mysql57 mysql -uroot -p`

3: `ALTER USER 'root'@'localhost' IDENTIFIED BY 'NEW_USER_PASSWORD';` Dont forget to change the Password

4: `UPDATE mysql.user SET host = '%' WHERE user = 'root';`

5: Restart the Docker Container

Now you should be able to connect to your MySQL server from the MySQL Workstation and the Discord Bot

## Start

To now start the bot open the Terminal and navigat into the Folder, where all the code lies and execute the command `npm run start`
