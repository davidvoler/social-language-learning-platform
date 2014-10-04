social-language-learning-platform
=================================

A social site for learning and practicing foreign languages


The Idea
--------







Installation
============
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

