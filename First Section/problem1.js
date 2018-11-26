// Given 2 arrays, create a function that let's a user know (true/false) whether these two arrays contains any common items

// Ex:
// const array1 = ["a", "b", "c", "x"];
// const array2 = ["n", "g", "e"];
// should return false

const array1 = ["a", "b", "c", "x"];
const array2 = ["e", "h", "x"];
// should return true

// Brute force
function BFcontainsCommonItem(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) return true;
    }
  }
  return false;
}

// O(a*b) - Time Complexity
// O(1) - Space complexity

// Better solution
function BScontainsCommonItem(arr1, arr2) {
  // Loop through first array and create object where properities === items in the array
  let map = {};
  for (let i = 0; i < arr1.length; i++) {
    if (!map[arr1[i]]) {
      const item = arr1[i];
      map[item] = true;
    }
  }
  // Loop through second array and check if item in second array exists on created object.
  for (let j = 0; j < arr2.length; j++) {
    if (map[arr2[j]]) {
      return true;
    }
  }
  return false;
}

// O(a+b) - Time complexity
// O(a) - Space complexity

// Way Better Solution
function WBScontainsCommonItem(arr1, arr2) {
  return arr1.some(item => arr2.includes(item));
}
