// I worked on this challenge [with: Andrew Koines (for the first 5 missions)]
 
// For each mission, write the title as a comment. (Shown here). Also include pseudocode as a comment. 
// Note: to make commenting easier, you can highlight the section you want to comment and hold 
// command + / This will comment the line. 
 
 
 // Mission 1

// This is your code controlling Tharin!

this.moveDown();
this.moveDown();
this.moveRight();
this.moveUp();

//Get Tharin behind Munchkin
// Move up
this.moveUp();
// Move right
this.moveRight();
this.moveRight();
// Move down
this.moveDown();
this.moveDown();

//Attack nearby enemy
this.attackNearbyEnemy();

// Edit it anywhere you like, add comments like these

// Follow the same "this.action();" format
// Code is case-sensitive.

// Mission 2

// Tharin might consider taking a detour after line 3.

this.moveUp();

// Make Tharin take a detour
this.moveRight();
this.moveLeft();

this.moveUp();

this.attackNearbyEnemy();

// Mission 3

// Kill Munchkin #1

this.moveRight();
this.attackNearbyEnemy();

// Grab Potion

this.moveRight();
this.moveDown();

// Kill Munchkin #2

this.moveUp();
this.moveRight();
this.attackNearbyEnemy();

//Mission 4

this.moveRight();
this.bustDownDoor();

// Delete the "//" in front of each line below.
this.moveRight();
this.say("Hey there!");
this.moveLeft();
this.moveLeft();
this.say("Attack!");

// Now get Phoebe to follow through the dungeon.
this.moveRight();
this.say("Follow me.");

// Escape

this.moveRight();
this.moveRight();
this.moveUp();
this.moveRight();

// Taunt the Guards

this.say("Hey there!");
this.moveDown();
this.moveRight();
this.moveUp();
this.moveRight();

// Mission 5

// Taunt the Ogre and run for cover!

this.moveDown();
this.moveDown();
this.say("Hey there!");
this.moveUp();
this.moveUp();

//Mission 6

// Write this isFriend(name) spell to tell friend from foe.
// Return true for friends' names, false for ogres' names.
/*
if(name === "William")
    return true;
if(name === "Krogg")
    //return true;  // <-- Start here; Krogg is not a friend!
	// Change to return false to keep Krogg imprisoned
    return false;
return true;
*/

// Change the code to only recognize friendly names

if(name === "William" || name === "Gordon" || name === "Lucas" || name === "Marcus" || name === "Phoebe" || name === "Robert")
    return true;
else
    return false;
return true;

// Mission 7

this.say("Hey!");

// Lure the ogre right into your arrow trap
// by saying a few more things at him.
// Anything works!

// Add taunts

 this.say("You suck!");
 this.say("You're fat!");
 this.say("I hate you!");

// Mission 8

this.moveXY(50, 16);
this.moveXY(63, 20);
this.moveXY(70, 10);  // This is a safe spot.

this.say("I can lure them in here.");

// Run your soldier out where the ogres can hear you.

this.moveXY(59, 30);

// Say something!

this.say("Die!");

// Then run back behind the arrow towers for safety.

this.moveXY(70,10);

// You can shift+click on the map to insert coordinates.

// Mission 9

this.moveXY(49, 66);
this.moveXY(60, 63);
this.moveXY(75, 63);
this.say("Hail, friends!");

// Saying anything with "follow" in it will get nearby soldiers
// to follow you

this.say("Follow me!");

// Move to the right coordinates

this.moveXY(67,43);

// Saying anything with "attack" will send nearby troops into
// a battle mode.

this.say("Attack them!");

// Make sure Tharin is safe!

this.moveXY(69,50);

// Mission 10

this.moveXY(30, 26);  // Move into range
this.attackXY(46, 5);  // Shoot once in the middle of the ogres

// If they survive a hit, ogres retaliate!
// Larger ogres take more than one hit...
// So, position and aim carefully.

// Attack the first group

this.moveXY(50, 35);
this.attackXY(69, 56);
this.attackXY(62, 48);

// Attack the second group

this.moveXY(45, 44);
this.attackXY(48, 63);
this.attackXY(45, 53);


/*
What is this referring to? Think programming-wise rather than in the terms of the game.

This refers to the method of the object that it is called on.

What does the () do in JavaScript?

It acts as a container for parameters and instructs the method to execute.

What is the point of the semicolons?

To signify the end of a statement.

*/ 
 
 
// Reflection:
// Write your reflection here.

// I worked on this as a paired assignment, which in hindsight probably wasn't a great idea since these tasks weren't really conducive to peered coding.
// Overall I think this exercise was a decent refresher on things like objects and methods and basic JavaScript syntax.
// However, the program ran pretty slowly and caused a big strain on my laptop.  I also felt like it didn't really teach JavaScript very explicitly, more of a "follow these directions" type activity unless I actually checked all the guide materials.
// That said, I didn't have many questions while coding and think it was a good review of using methods to manipulate objects.
// I don't think I learned anything really new in this challenge but it was a good review from the CodeCademy JavaScript course.  I feel fairly confident with the
// competencies taught in this challenge, but I would probably still need to look a few things up.  Overall I found the challenge a little tedious, I thought Code Combat was set up a little too much
// like a game and less of a teaching tool. 