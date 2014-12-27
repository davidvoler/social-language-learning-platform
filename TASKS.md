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
* complete
* match
* mix
* question
* text 
* vocabulary

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

### Practice Directive - Format
 
 Provide a link method
 init()
    Initialization from row exercise data
 User interaction 
    onclick onexit onkeydown
 
Q: How do we report a correct/wrong answer?

A1: The correct way would be to wrap each preview directive inside a transclude directive

A2: We could also simply call the controller on-correct() and on-incorrect() method and let the controller 
 report to the server if needed and change ui. This option prepares for the A1 - transclude directive

A3: The simplest way is to add interaction area inside each preview directive


Where do we save correct/incorrect info:
* inside exercise, delete it before save
* in a separate list - this way we can save it to user's lesson exercise

I think second options is better 





###Directives - the deference between Preview and Practice

In preview we do not do initialization as exercise changes while we watch it.
In practice we will have all the initialization done - like shuffling answers etc.


### Save lesson with a timeout 
Save lessons with a timeout even if user does not choose to save. 





### Complete

#### Create
Simple version

Optional
Add Text
Add Options

#### Preview
Simple and functional

#### Practice



## Stage1.3 - Practice Vocabulary

User can practice vocabulary 

### Status


## Stage 1.4 Mark 
I simple way is implemented - with 1 for correct and -1 for wrong
The problem is that this will not work if there is more than one element in the exercise
 
Alternatives
* Mark Option 
The preview directive will show wrong or right
We communicate with top controller to send a mark

Mark can be 0-100 or 0-1
On the exercise level we can set the weight of the exercise

Default - for each choice the use has to make weight 1 
In a simple complete exercise with one selection - weight will be one by default. 
i a match exercise with 4 choices - weight will be 4 

Mark calculation - Simple 

Wrong =  0
so in an exercise of 4 selections 
if you got 3 correct and one wrong you have 3 

If the lesson has 10 exercises each with 5 selection
maximum is 50 
minimum is 0
After incorrect choice you can correct your choice but this will not change your mark.

Another options is that in each wrong choice you loose another mark - this way mark can also be negative

Lesson has 10 exercises each with 10 selection
maximum is 100

Each selection has 4 choices - maximum 3 wrong choices
Say that a user always takes the 3 wrong choices so he has -3 and then a correct choice 
now it becomes -2
minimum is -200

Learning languages is about practice rather than having it once correct.
However if a user gets a complete lesson correct the lesson might be too easy for him

The options for level of knowledge of a word or language property are:

1. I know it 
2. I have learned it but I might need more practice in the future
3. I am likely to answer it correctly
4. I have seen it more than once 
5. It is new to me


The practice rules should be

1. do get the user to practice it         
    practice priority: 0
    time dependant:    no
2. practice it after a few weeks only
    practice priority: 1
    time dependant:    yes    
3. practice it - but not so often
    practice priority: 2
    time dependant:    yes    
4. practice it until you get it in 3 level
    practice priority: 3
    time dependant:    yes    
5. practice it once in a while - do not bother the user with too many new words
    practice priority: 1
    time dependant:    yes    


An alternative is to separate lesson and vocabulary 
in vocabulary practice - you want to create a mix of all types each time

15% 5 
40% 4
30% 3
10% 2
5%  1

Now we have to set value for each level


In practice we are looking collecting exercises. 
Should we place exercise outside the lesson? 
that is create a separate exercise collection

We could also get only the the exercises from inside the lesson. 
What would be the simplest data format?

exercise in lesson 

Loading a lesson:
1. load lesson document
saving a lesson:
1. save a lesson document
in practice:
Search inside lesson object with some keys on lesson.
How complicated would this query be
Search lesson where lesson matches languages, level and permission. 
load only exercise that are non context dependant


Lesson collection and exercise collection
Loading a lesson
1. load lesson info
2. load lesson exercises
saving lesson
1. Save lesson info
2 save exercises
in practice
1. Load exercises from exercise collection that match a certain criteria  
published,.....

In Practice we need a link between practiced collection and exercise (or lesson) collection
As there is no join in mongodb how do we implement it?


Solution: 

Do it in 2 phases - even in sql database this would require 2 phases. 

1. Load a list of user practice exercises
2. load from exercises (or lesson) the list with id's 

loading a list of items from user practice. 

####Practice collections

Exercise is in a different collection

practice_lesson: 

sums user's mark in a lesson - the value is calculated from practice exercise
keys: lesson,user,languages
This collection may simply include a list of exercise_ids and mark

practice_exercise
keys:exercise_id,user_id,lang, exp_lang, last_viewed,mark,level


practice_vocabulary:
keys:exercise_id,user_id,lang, exp_lang, last_viewed,mark,level, term,translation
A list of vocabulary items that the user has ever encountered


When user is in a lesson:
When ever he answers an exercise the mark is sent to the practice_handler

Practice handler will:

1. update practice_exercise collection
2. update practice_lesson collection
3. update vocabulary collection it is a vocabulary item
 


## Lesson and Exercise in a separated collection

### cons.

1. It makes saving a lesson more complicated - saving lesson require saving exercises separately.
2. In loading a lesson it will be the same - we have to load a lesson and than its exercises

### pros. 

1. We can search for exercise outside lesson - useful for practice
2. We can easily reuse exercise. 

### Changes of the current architecture
#### LessonHandler
Save a lesson will save its exercise separately 
Load lesson will load exercise if needed ( in list for example we do not need it)

Alternatively we separate lessen and exercise also in handlers. 
load: load lesson info then load exercises
save: save lesson, then save exercise - both can happen in a single view. 


## Stage1.5 - My Lessons
List of lessons for user
Level for each lesson
When user start a lesson - a document should be create with




## Stage1.6 - Content
Write a few lessons making sure we have all it takes to go for the demo.

## Stage1.7
Integrate multilingual UI

##Stage1.9.o Optional video exercise
Basic video exercise

https://github.com/brandly/angular-youtube-embed
looks simple

Consider using $interval of angular.
When playing 

$interval(fn, delay, [count], [invokeApply]);


### Status Started


###localization 
Gettext translation
Started

### Help for exercise creation
Use simple inline help. with help css class
When a help link is needed consider using some help directive based on:
http://plnkr.co/edit/2jK2GFcKSiKgMQMynD1R?p=preview
Done 

## Menu
Create a controller that handles all menu related action like login, languages and more. 



### Home

 small overview of the site
What else should be in the home page? 
Options are one or more of the following:

1. List of lessons
2. Example lessons/exercise
3. My Lessons - list of lessons that I have started
4. Recommended lessons
5. Practice Pane
 
 
### Lesson Page

Even if we have lessons in the home page - here we will have a list of lessons 
with better search and more lessons information



### Practice 
 
Practice exercise 
Practice vocabulary
Practice settings ? Or in settings page
statistics basic statistics

###Statistics 

do we need a separate page for statistics?
We can place relevant statistics in each page. 

 


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

Small issues
------------
Tornado should restart if html or javascript change

We can use add watch but this is for a single file 
We need to create a utility that will watch a complete directory.
Another solution would be to use nginx during development 