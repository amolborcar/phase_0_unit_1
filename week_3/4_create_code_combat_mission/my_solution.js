// I worked [with: Kendall Carey] on this challenge

// Your mission description:
// Lure Ogre into cell and trap them.
// Start outside the cell, run into the cell and taunt the Ogre, run around the cell,
// leave the cell before Ogre attacks and lock the cell behind you.

// Pseudocode
// create character
// provide first movement into cell
// instruct user to taunt Ogre
// instruct user to move around the perimeter of the cell
// instruct the user to leave the cell
// instruct the user to lock the door
//

// Initial Code

// Create character

var wizard = {
  name: "Gandalf",
  x_pos: 50,
  y_pos: 50
}

// Create taunt functions

var taunt=function(taunt) {
  prompt("Type your taunt here", taunt);
}

// Create movement functions
var moveUp = function() {
  this.y_pos ++ 10;
}

var moveDown = function(){
  this.y_pos -- 10;
}

var moveRight = function(){
  this.x_pos ++ 10;
}

var moveLeft = function(){
  this.x_pos -- 10;
}

// Create lock function

var lock = function(command) {
  console.log(command);
}

// Alert user

alert("Trap the Ogre in the cell!");

// provide first movement into cell

wizard.moveUp();

// instruct user to taunt Ogre

alert("Taunt the Ogre to lure him into the cell!");
// Solution
wizard.taunt();

// instruct user to move around the perimeter of the cell

alert("Run away from the Ogre");
// Solution
wizard.moveRight();
wizard.moveUp();
wizard.moveLeft();
wizard.moveLeft();
wizard.moveDown();
wizard.moveRight();

// instruct the user to leave the cell

alert("Get out of there!");
// Solution
wizard.moveDown();

// instruct the user to lock the door

alert("Now lock him in there!");
// Solution
wizard.lockDoor();

// mission complete!
alert("Congratulations, you trapped the ogre in the cell!");


// Refactored Code

// We were going to use a switch statement for movement but decided that individual functions were easier.
// We decided that the taunt function was fine
// Added functionality if the ogre catches the wizard.

// Create characters - added Ogre character

var wizard = {
  name: "Gandalf",
  x_pos: 50,
  y_pos: 50,
  alive: true
}

var ogre = {
  name:"Ogre",
  x_pos:20,
  y_pos:20
}

// Create taunt functions

var taunt=function(taunt) {
  prompt("Type your taunt here", taunt);
}

// Create movement functions
var moveUp = function() {
  this.y_pos ++ 10;
}

var moveDown = function(){
  this.y_pos -- 10;
}

var moveRight = function(){
  this.x_pos ++ 10;
}

var moveLeft = function(){
  this.x_pos -- 10;
}

// Create lock function

var lockDoor = function(command) {
  console.log(command);
}

// Create attack function

var attack = function() {
  console.log("Ogre caught you and ripped you apart!")
}

if (ogre.x_pos === wizard.x_pos && ogre.y_pos === wizard.y_pos) {
  ogre.attack();
  wizard.alive=false;
}

// Begin mission

// Alert user

alert("Trap the Ogre in the cell!");

// provide first movement into cell

wizard.moveUp();

// instruct user to taunt Ogre

alert("Taunt the Ogre to lure him into the cell!");
// Solution
wizard.taunt();

// instruct user to move around the perimeter of the cell

alert("Run away from the Ogre");
// Solution
wizard.moveRight();
wizard.moveUp();
wizard.moveLeft();
wizard.moveLeft();
wizard.moveDown();
wizard.moveRight();

// instruct the user to leave the cell

alert("Get out of there!");
// Solution
wizard.moveDown();

// instruct the user to lock the door

alert("Now lock him in there!");
// Solution
wizard.lockDoor();

// mission complete!
alert("Congratulations, you trapped the ogre in the cell!");



// Reflection
// 
// I thought this was a more fun challenge than I anticipated going in.  What struck me was how many things we had to consider to enable our 
// character to complete the mission we created.  We initially just created the character and some movement functions,
// but then we remembered we had to account for the ogre, had to account for if the ogre attacks, and make sure to properly guide
// the user through the challenge.  It was difficult to complete without being able to program in actual game functionality but still fun.
// We had to look up some syntax a couple times and were trying to figure out how to attach the functions to the objects, and we referenced both
// the actual Code Combat challenges as well as the CodeCademy JavaScript course which we had both created.
// I don't think I learned anything new and didn't really have trouble with anything in particular, but I do think this challenge reinforced some things 
// I had learned realy well.   I feel fairly confident with using objects and functions in JS now but would probably still need to look some stuff up.
// I thought this was a great challenge to pair on to keep it interesting and my pair was really great, I think if I had done this challenge solo I would have found it more annoying. 
// 
// 
// 
// 
// 
// 

