TODO
----
Add help for each directive 
learn from the source code on how to do it.


scope & directives
------------------
I have managed to get text exercise is working edit and preview.
There might be a problem with a private $scope for the exercise. 
it seems that using the context scope is the right thing here.
Text is simple - it has no ng-repeat inside it.
 Now it is left to see that the same will be also for directives with ng-repeat inside the templateUrl

 
- now in match it seems to work even in a private scope
Errors might be the of cached template

Using template instead of templateUrl solves the problem

UPDATE: working with internal templates is less comfortable and it is not supported by angular-gettext
A better solution is to disable Disable cache
http://stackoverflow.com/questions/14718826/angularjs-disable-partial-caching-on-dev-machine


