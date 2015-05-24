cd  /etc/mysql
nano my.cnf

bind-address            = 0.0.0.0

GRANT ALL PRIVILEGES ON *.* TO 'user'@'%' IDENTIFIED BY 'PASSWORD';

FLUSH PRIVILEGES;