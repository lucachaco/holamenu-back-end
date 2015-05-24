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
#https://www.digitalocean.com/community/tutorials/how-to-install-node-js-on-an-ubuntu-14-04-server
add-apt-repository ppa:chris-lea/node.js
apt-get update
apt-get -y install nodejs

#install sails
npm -g install sails
