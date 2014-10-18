# tasks 


# Stage1 - basic concepts
This stage will include most basic functionality 

languages - done 
lesson add
main page lesson search

### Status - Done

## Stage1.1 - basic concepts

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

### Status 
Done

## Stage1.2 - Exercise functionality

### Tasks
The exercises should be completely functional:
* Add
* Edit
* Preview
* Practice

For each exercise type add 
* Help
* Example (inside Help)
* Delete Exercise
* Move template url into templates


### Status - Started

## Stage1.3 - Practice Vocabulary

User can practice vocabulary 

### Status


## Stage1.4 - My Lessons
List of lessons for user
Level for each lesson
When user start a lesson - a document should be create with




## Stage1.5 - Content
Write a few lessons making sure we have all it takes to go for the demo.


##Stage1.9.o Optional video exercise
Basic video exercise

https://github.com/brandly/angular-youtube-embed
looks simple

### Status Started


# stage 2 - DEMO

In this stage the demo site can be viewed by anyone 
google auth - or facebook auth 
intuitive - simple design
basic exercise types


## Stage2.1 - tags

Tagging of lesson
### Status
https://github.com/mbenford/ngTagsInput


## Stage2.2 - rating
Users can rate lessons
Rating is a angular-ui-bootstrap component


## Stage2.3.o - More Social Login

Facebook
Twitter
Improve Google+
Consider more social login providers


#Stage 3 - Marketing

Finding newsgroups where people might be interesting in the idea

Interest people and groups that are 
* Software related - as an example of a complete Tornado, Mongodb, Angular project
* Language teacher news groups 




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
Tornado should restart if html or javascript change

We can use add watch but this is for a single file 
We need to create a utility that will watch a complete directory.
Another solution would be to use nginx during development 