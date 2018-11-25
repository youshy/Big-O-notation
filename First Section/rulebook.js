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

function compressBoxesTwice(boxes, boxes2) {
  boxes.forEach(boxes => console.log(boxes));
  boxes2.forEach(boxes2 => console.log(boxes2));
}

// Big O will be O(a + b) because this will be dependent on two different values

// 4. Drop non dominants

function printaAllNumbersThenAllPairSums(numbers) {
  console.log("these are the numbers:");
  numbers.forEach(number => console.log(number));

  console.log("and these are their sums:");
  numbers.forEach(firstNumber => {
    numbers.forEach(secondNumber => console.log(firstNumber + secondNumber));
  });
}

printaAllNumbersThenAllPairSums([1, 3, 5, 7, 9]);

// Big O notation would be - O(n + n^2)
// But we want to drop non-dominant term, so Big O notation will be O(n^2)
// By dominant - we perceive the one that will increase in the biggest pace
