#!/usr/bin/env bash

apt-get update

echo 'mysql-server-5.5 mysql-server/root_password password toor' | debconf-set-selections
echo 'mysql-server-5.5 mysql-server/root_password_again password toor' | debconf-set-selections
apt-get -y install mysql-client mysql-server-5.5

export LANGUAGE=en_US.UTF-8
export LANG=en_US.UTF-8
export LC_ALL=en_US.UTF-8
locale-gen en_US.UTF-8
dpkg-reconfigure locales

apt-get install -y git

#install node
curl -sL https://deb.nodesource.com/setup | sudo bash
apt-get install -y nodejs
apt-get install -y build-essential

#install sails
npm -g install sails
