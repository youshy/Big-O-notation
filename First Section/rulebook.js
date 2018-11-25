// Rule book for simplyfying Big O notation

// 1. Worst case

// Making loop more efficient
// Based on Finding Nemo

const everyone = [
  "dory",
  "bruce",
  "marlin",
  "gill",
  "nemo",
  "bloat",
  "nigel",
  "squirt",
  "darla",
  "hank"
];

function findNemo(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === "nemo") {
      console.log("FOUND NEMO!");
      break; // Loop will break when Nemo found
    }
  }
}

// But what if Nemo is the last one? Worst case scenario - based on that we can assume Big O notation - if Nemo will be last element of an array - O(n)

findNemo(everyone);

// 2. Remove Constants
// 3. Different terms for inputs
// 4. Drop non dominants
