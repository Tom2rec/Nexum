# Nexum

Application to effortlessly bond with other enthusiasts.

---
## Launching
### Database

Create docker container
```bash
docker run --name mysql -e MYSQL_ROOT_PASSWORD=my-secret-pw -d mysql:latest
```

Log to mysql container
```bash
docker exec -it mysql  mysql -uroot -p
```

Create database, user and add privilages
```bash
CREATE TABLE nexum;
CREATE USER 'nexum'@'172.17.0.1' IDENTIFIED BY 'password';
GRANT ALL PRIVILEGES ON *.* TO 'nexum'@'172.17.0.1' WITH GRANT OPTION;
FLUSH PRIVILEGES; 
```

### Application
In case you want some example data

on the **only** first run

1. open:

```bash
server/src/main/resources/application.properties
```

2. find line 14 and uncomment it
```bash
13 to run initial data.sql uncomment this line
14 #spring.sql.init.mode=always
```
3. run application
4. comment this line


