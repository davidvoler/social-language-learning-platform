tasks 
=====

stage1 - basic concepts
-----------------------
This stage will include most basic functionality 

languages - done 
lesson add
main page lesson search

* Done

stage1.1 - basic concepts
-----------------------
login basic - with cookie
profile
author is saved in lessons

exercises:
- complete
- match
- mix
- question
- text 
- vocabulary

* Done

Stage1.2 - Exercise functionality
---------------------------------
The exercises should be completely functional:
 Add
 Edit
 Preview
 Practice

Stage1.3 - Practice Vocabulary
------------------------------
User can practice vocabulary 

Stage1.4 - My Lessons
---------------------
List of lessons for user
Level for each lesson

Stage1.4.o Optional video exercise
----------------------------------
Basic video exercise

stage 2 - DEMO
--------------
In this stage the demo site can be viewed by anyone 
google auth - or facebook auth 
intuitive - simple design
basic exercise types


Stage2.1 - tags
---------------
Tagging of lesson

Stage2.2 - rating
-----------------
Users can rate lessons


Stage2.3 - Social Login
-----------------------
Facebook
Twitter
Improve Google+
Consider more social login providers





Technical issues & question
---------------------------

When going to the next exercise - should we use a the standard routing with url or a much simpler ui routing
another option is just ot show hide the active url. 
I suggest to start simple - 
a service will load the full lesson
navigating to next will give the next exercise. from the service
later we can consider and replace it with ui-routing


using ui routing vs url routing
https://github.com/angular-ui/ui-router

small issues
------------
- Tornado should restart if html or javascript change
