// Log all pairs of array
const boxxes = ["Fender", "Gibson", "Ibanez", "Majesty", "Yamaha "];

function logAllPairsOfArray(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      console.log(array[i], array[j]);
    }
  }
}

logAllPairsOfArray(boxxes);

// Rule of thumb - when nested loops, multiplicate n
// So, this one will be O(n^2) {O(n*n)}
// O(n^2) - quadratic time

// Everything beyond O(n^2) - so, f.e. O(n^3) - it seems like a VERY bad idea
