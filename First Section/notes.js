// 3 Pillars Of Programming

// Readable
// Speed - Time Complexity
// Memory - Space Complexity

// Measuring Space Complexity:

// Heap - where we store variables
// Stack - where we store function calls

// What causes Space Complexity?

// Variables
// Data Structures
// Function Call
// Allocation

// Space Complexity problem example:
function boooo(n) {
  for (let i = 0; i < n.length; i++) console.log("boo!");
}

boooo([1, 2, 3, 4, 5, 6]); // Space Complexity of O(1) - we're just assigning memory to create variable "i"

function booArray(n) {
  let booArray = [];
  for (let i = 0; i < 6; i++) booArray[i] = "Booo!";
  return booArray;
}

booArray(); // Space Complexity of O(n) - because we've created data structure

// PREMATURE OPTIMALIZATION IS THE ROOT OF ALL EVIL
