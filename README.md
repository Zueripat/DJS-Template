# Discord Bot Template (Typescript & MySQL)

Download the Repository by executing the following Command in your Terminal `git clone https://github.com/Zueripat/D.JS-Bot-Template.git`

After installing the Source Code, you need to install the Dependencies. Navigat to the Folder where you cloned the Repository and execute the following Command `npm install` or `yarn install`

Now you only have to fill in your Bot Token and your MySQL Credentials in the `.env` file and you are ready to go!

## MySQL

Download Workbench: `https://dev.mysql.com/downloads/workbench/`

Download Docker: `https://www.docker.com`

After installing docker run `docker run --name=mysql mysql/mysql-server:latest` to create a MySQL Docker instance. 

Now Search for the automatically generated root pwd with the `docker logs mysql 2>&1 | grep GENERATED` Command

This should be it... more on MySQL: `https://stackoverflow.com/questions/62072977/whats-default-password-in-docker-container-mysql-server-when-you-dont-set-one`
