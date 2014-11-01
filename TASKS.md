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

### Status Started


###localization 
Gettext translation
Started

### Help for exercise creation
Use simple inline help. with help css class
When a help link is needed consider using some help directive based on:
http://plnkr.co/edit/2jK2GFcKSiKgMQMynD1R?p=preview

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