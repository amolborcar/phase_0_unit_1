// __________________________________________

// Functions

// Test 1 user story: When I give you a set of numbers, you print out the sum of all the numbers.
var sum=function(arr) {
  var total=0
  for(i=0; i<arr.length; i++) {
    total+=arr[i];
  }
  console.log(total);
  return total;
}

//Test 2 user story: When I give you a set of numbers, you print out the arithmetic mean of all the numbers.
var mean=function(arr) {
  var total=sum(arr);
  answer=total/arr.length;
  console.log(answer);
  return(answer);
};

//Test 3 user story: When I give you a set of numbers, you print out the median number.

var median=function(arr) {
  arr.sort;
  if(arr.length%2===1){
    var index=Math.floor(arr.length/2);
    answer = arr[index];   
  } 
  else {
    var index=(arr.length/2);
    answer = (arr[index] + arr[index-1])/2;
  }
  console.log(answer)
  return(answer);
}

// Tests:  Do not alter code below this line.


oddLengthArray  = [1, 2, 3, 4, 5, 5, 7]
evenLengthArray = [4, 4, 5, 5, 6, 6, 6, 7]


function assert(test, message, test_number) {
  if (!test) {
    console.log(test_number + "false");
    throw "ERROR: " + message;
  }
  console.log(test_number + "true");
  return true;
}

// tests for sum
assert(
  (sum instanceof Function),
  "sum should be a Function.",
  "1. "
)

assert(
  sum(oddLengthArray) === 27,
  "sum should return the sum of all elements in an array with an odd length.",
  "2. "
)

assert(
  sum(evenLengthArray) === 43,
  "sum should return the sum of all elements in an array with an even length.",
  "3. "
)

// tests for mean
assert(
  (mean instanceof Function),
  "mean should be a Function.",
  "4. "
)

assert(
  mean(oddLengthArray) === 3.857142857142857,
  "mean should return the average of all elements in an array with an odd length.",
  "5. "
)

assert(
  mean(evenLengthArray) === 5.375,
  "mean should return the average of all elements in an array with an even length.",
  "6. "
)

// tests for median
assert(
  (median instanceof Function),
  "median should be a Function.",
  "7. "
)

assert(
  median(oddLengthArray) === 4,
  "median should return the median value of all elements in an array with an odd length.",
  "8. "
)

assert(
  median(evenLengthArray) === 5.5,
  "median should return the median value of all elements in an array with an even length.",
  "9. "
)