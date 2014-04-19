// I paired [by myself, with:] on this challenge.




// Pseudocode
// To satisfy the first test, declare a var secretNumber with a numeric value.
// To satisfy the second test, set secretNumber = 7.
// To satisfy the third test, declare a var password with a string value.
// To satisfy the fourth test, set password = "just open the door"
// To satisfy the fifth test, declare a var allowedIn with a boolean value.
// To satisfy the sixth test, set allowedIn = false.
// To satisfy the seventh test, create an array called members.
// To satisfy the eighth test, set the first element of members to "John"
// To satisfy the ninth test, set the fourth element of members to "Mary"


// __________________________________________
// Write your code below.

// Step 1
var secretNumber = 3;

// Step 2
var secretNumber = 7;

// Step 3
var password = "Speak friend and enter"

// Step 4
var password = "just open the door"

// Step 5
var allowedIn = true;

// Step 6
var allowedIn = false;

// Step 7
var members = ["Hello", "I", "Am", "Amol"];

// Step 8
var members = ["John", "Two", "Three", "Four"]

// Step 9
var members = ["John", "Peter", "Paul", "Mary"]


// __________________________________________
// Refactored Code: Include a refactored version (or justification of your original code) here. 

// Steps 1-2
var secretNumber = 7;

// Steps 3-4
var password = "just open the door";

// Steps 5-6
var allowedIn = false;

// Steps 7-9
var members = ["John", "Peter", "Paul", "Mary"]



// __________________________________________
// Reflection: Use the reflection guidelines to write a reflection here. 
// 
// The biggest issue I faced in this challenge was understanding exactly what the direction were.  Once I figured out (I think) how to complete it, I found the challenge fairly simple.  
// I understood the drivers to be basic tests on the variables that I created and felt that the best way to complete the challenge was just create random values for the variables, then correct
// them after I received the error message.  I felt a little confused because I could just look ahead in the code and see what the "correct" values were for each question.
// I don't think I had any questions about the content of the session, but it was a good review of creating variables and arrays.
// I feel very confident in working with different types of variables after completing this challenge. 
// Overall I wish the directions had been a little more clear as to how to complete the challenge, but overall I felt it was simple and effective. 
// 
// 
// 
// 


// __________________________________________
// Driver Code:  Do not alter code below this line.

function assert(test, message, test_number) {
  if (!test) {
    console.log(test_number + "false");
    throw "ERROR: " + message;
  }
  console.log(test_number + "true");
  return true;
}

assert(
  (typeof secretNumber === 'number'),
  "The value of secretNumber should be a number.",
  "1. "
)

assert(
  secretNumber === 7,
  "The value of secretNumber should be 7.",
  "2. "
)

assert(
  typeof password === 'string',
  "The value of password should be a string.",
  "3. "
)

assert(
  password === "just open the door",
  "The value of password should be 'just open the door'.",
  "4. "
)

assert(
  typeof allowedIn === 'boolean',
  "The value of allowedIn should be a boolean.",
  "5. "
)

assert(
  allowedIn === false,
  "The value of allowedIn should be false.",
  "6. "
)

assert(
  members instanceof Array,
  "The value of members should be an array",
  "7. "
)

assert(
  members[0] === "John",
  "The first element in the value of members should be 'John'.",
  "8. "
)

assert(
  members[3] === "Mary",
  "The fourth element in the value of members should be 'Mary'.",
  "9. "
)

