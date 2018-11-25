// Rule book for simplyfying Big O notation

// 1. Worst case

// Making loop more efficient
// Based on Finding Nemo

const everyoneInThePond = [
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

function findingNemo(array) {
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

function printFirstItemThenFirstHalfThenSayHi100Times(items) {
  console.log(items[0]);

  let middleIndex = Math.floor(items.length / 2);
  let index = 0;

  while (index < middleIndex) {
    console.log(items[index]);
    index++;
  }

  for (let i = 0; i < 100; i++) console.log("hi");
}

// Total Big O notation for this will be O(1 + n/2 + 100) but as we don't care - we can drop constans so Big O notation of this will be O(n)
// Even with O(2n) or O(23523n) we will think about it as O(n) withouth thinking how steep calculations will be

// 3. Different terms for inputs

// 4. Drop non dominants
