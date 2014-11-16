social-language-learning-platform
=================================

A social site for learning and practicing foreign languages


The Idea
--------

* A platform enabling anyone to learn any language for free. 
* Language content is created and improved by the users
* Lessons can be translated from one language to another 
* The platform should be open source
* The platform should cater for different languages with special needs like RTL languages, Languages that have no written script etc.

Status
------
This project is in an alpha stage, looking for contributors. 

Technologies
------------

We are currently using:

* Python/Tornado
* Mongodb
* Angualrjs
* Twitter Bootstrap

Based on the mongodb-tornado-angular https://github.com/davidvoler/mongodb-tornado-angular

Demo Site
---------
We have created a temporary Demo Site 
http://ec2-54-69-159-238.us-west-2.compute.amazonaws.com/



Installation
------------
if you do not have python installed and access to a mongodb database please refer to install software later

linux/mac

Python3.x

* git clone https://github.com/davidvoler/social-language-learning-platform.git
* cd social-language-learning-platform
* which python3
* virtualenv --distribute -p YOUR_PYTHON3_PATH .
* source bin/activate
* pip install -r requirements.txt
* cd src/server
* python app.py
* open a browser http://localhost:9917


Python2.x

* git clone https://github.com/davidvoler/social-language-learning-platform.git
* cd social-language-learning-platform
* virtualenv  .
* source bin/activate
* pip install -r requirements.txt
* cd src/server
* python app.py


Windows
* TBD:


Install Client Libraries
------------------------
You must have node and bower installed 

cd src/client

bower install
npm install


Install & build mobile version
------------------------------

sudo npm install -g cordova ionic

cd src/mobile

npm install


Open src/mobile/www/index.html with a webserver such as simplehttpserver

https://docs.python.org/2/library/simplehttpserver.html

Build mobile application
------------------------

Android 
-------

cd src/mobile

ionic platform add android

ionic build android

ionic emulate android


ios
---

cd src/mobile

ionic platform add ios

ionic build ios

ionic emulate ios



Localization
------------
Install grunt and grunt-cli

cd src/client

run grunt

In src/clint/po a template.po file is created use a poedit ir any other tool
to generate a translation

keep you translation in po directory

run grunt one more time
you translation should now 





Install software
================

Mongodb
-------
If you do not have access to a mongodb database you may install a local mongodb.

installation instructions on all platforms can be found here:

http://docs.mongodb.org/manual/installation/

If you are working on Windows or Mac - you will have to remember to start mongodb before running

On linux mongodb is installed as a service by default.


Python
------
I have decided to start with python3.x however python2.6 should work as well.

python installation instruction can be found here:

https://www.python.org/download

