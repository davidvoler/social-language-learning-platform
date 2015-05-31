Installing a production system
==============================


Install on linux - Ubuntu server 14.04
--------------------------------------

Mongodb
-------
installation instruction from:
http://docs.mongodb.org/manual/tutorial/install-mongodb-on-ubuntu/

sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 7F0CEB10
echo 'deb http://downloads-distro.mongodb.org/repo/ubuntu-upstart dist 10gen' | sudo tee /etc/apt/sources.list.d/mongodb.list
sudo apt-get update
sudo apt-get install -y mongodb-org

Nginx
-----
sudo apt-get update
sudo apt-get install nginx

pip3
----
sudo apt-get install python3-pip

Git
---
sudo apt-get install git

supervisor
----------
sudo apt-get install supervisor


We skip the virtual env and intall all required libraries on main python lib

cd social-language-learning-platform/
sudo pip3 install -r requirements.txt

cd src/server
cp local_settings_example.py local_settings.py

edit your local_settings.py if needed

test application
----------------
python3 app.py

if you get no errors we can now start the application using supervosor
use CTRL c to stop the tornado application


Create a log file directory
---------------------------
sudo mkdir /var/log/sllp


configure and restart supervisor
--------------------------------
cd /etc/supervisor/conf.d/
sudo cp ~/social-language-learning-platform/src/production/sllp.conf .

sudo service supervisor stop
sudo service supervisor start


nginx config
------------
Edit default file to fit your configuration
copy defualt file to:
/etc/nginx/sites-enabled/default (replace existing file)

sudo service nginx restart




