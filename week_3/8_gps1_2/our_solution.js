
// GPS 1.2 - JavaScript

// YOUR FULL NAMES:
//  1.Amol Borcar
//  2.Amelia Downs


// 1. "YOU SIGNED... WHO?!"
// Pseudocode: 
// Create objects with properties: name (string), age(int), quote(string)

var benStiller = {
  name: "Ben Stiller",
  age: 48,
  quote: "There's got to be more to life than being really, really, ridiculously good looking"
}

var benCumb = {
  name: "Benedict Cumberbatch",
  age: 41,
  quote: "Nice to meet you, Amelia."
}

// 2. "Here they Come!"
// Pseudocode: 
// make clients same as before, then store in array

var adamSandler = {
  name: "Adam Sandler",
  age: 47,
  quote: "That's your home. Are you to good for your home?"
}

var kristinBell = {
  name: "Kristin Bell",
  age: 33,
  quote: "Do you want to build a snowmen?"
}

var jimCarrey = {
  name: "Jim Carrey",
  age: 52,
  quote: "...so you're telling me there's a chance? Yay."
}

var celebArray = [benStiller, benCumb, adamSandler, kristinBell, jimCarrey];


// 3. "TIME IS MONEY!"

//YOUR CODE HERE!

// Pseudocode:
// Create a function to make a new client with properties name, age, and quote

function Client(name, age, quote) {
  this.name = name;
  this.age = age;
  this.quote = quote;
}

var shooterMcGavin = new Client("Shooter McGavin", 48, "Just stay out of my way... or you'll pay. Listen to what I say.");
shooterMcGavin.constructor === Client;
shooterMcGavin.age === 48;
shooterMcGavin.quote === "Just stay out of my way... or you'll pay. Listen to what I say.";


// 4. "SHOW 'EM OFF!"

// Pseudocode:
// Loop through the array and display each property for each celebrity in the console;

// for (var i = 0; i < celebArray.length; i++) {
//   console.log(celebArray[i].name);
//   console.log(celebArray[i].age);
//   console.log(celebArray[i].quote);
//   console.log("");
// }


// ** BONUS **

for (var i = 0; i < celebArray.length; i++) {
  console.log("My name is " + celebArray[i].name);
  console.log("I am " + celebArray[i].age + " years old");
  console.log("I say stuff like " + celebArray[i].quote);
  console.log("");
}

//  Your Reflection:

/* Our strategy was pretty simple; Amelia drove while I navigated for the first two parts, then we switched roles.  
Overall we didn't have much trouble except for a few syntax questions which we solved pretty easily. 
I'm still personally having some trouble with creating functions.  For example, I had to think for a little while before remembering the this.name
and similar parts in step 3, but Amelia knew it right away.  I think a little more practice and I'll be more confident, I understand the logic of it so I don't think it'll be hard to master.
I thought the challenge was well set up and pretty simple, overall I enjoyed it. 

*/






