const strings = ["a", "b", "c", "d"];
// 4*4 = 16 bytes of storage in 32bit system

// Methods for arrays

// push - adds element at the end of an array
strings.push("e"); // O(1) - because it does it once

// pop - remove the last item
strings.pop(); // O(1) - it does it once, always from the end

// unshift - adds element at the beginning of an array
strings.unshift("x"); // O(n) - because it has to reassing indexes

// splce - adds/delete element on any given index
strings.splice(2, 0, "wait, what?"); // O(n) - because it has to reassing indexes according to place where it started

// Final version of the array
console.log(strings);

// Static vs dynamic arrays

// Static array has memory allocated from start - we define how big the array should be and with expansion what we do is that we copy the array again and then allocate same amount of memory to it
// Dynamic array has memory allocated for given amount of members - so, it expands easily
// JavaScript doesn't have static arrays - every array will be dynamic from start
// And actually - JS arrays are objects with numbers as keys.

// Create array from scratch
class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  get(index) {
    return this.data[index];
  }

  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.length;
  }

  pop() {
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }

  delete(index) {
    const item = this.data[index];
    this.shiftItems(index);
    return item;
  }

  shiftItems(index) {
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
  }
}

const newArr = new MyArray();
newArr.push("bo");
newArr.push("ho");
newArr.push("so");
newArr.push("to");
newArr.push("ro");
newArr.delete(0);
newArr.shiftItems(1);
console.log(newArr);
console.log(newArr.data);

// Ex. reverse a string
// Create a function that reverses a string
// "Hi My name is Tom" should be "moT si eman yM iH"

// From scratch
function reverseStr(str) {
  // check iput
  if (!str || str.length < 2 || typeof str !== "string")
    return "I don't think thats ok?";

  const backwards = [];
  const totalItems = str.length - 1;
  for (let i = totalItems; i >= 0; i--) backwards.push(str[i]);
  return backwards.join("");
}

reverseStr("Tom and Jerry");

// With built-in methods
function reverseStr2(str) {
  return str
    .split("")
    .reverse()
    .join("");
}

// With ES6
const reverseStr3 = str =>
  str
    .split("")
    .reverse()
    .join("");

// With spread operator
const reverseStr4 = str => [...str].reverse().join("");

// Ex2 - merge sorted arrays

const mergeSortedArrays = (arr1, arr2) => {
  const mergedArray = [];
  let arr1Item = arr1[0];
  let arr2Item = arr2[0];
  let i = 1;
  let j = 1;

  if (arr1.length === 0) return arr1;
  if (arr2.length === 0) return arr2;

  while (arr1Item || arr2Item) {
    if (!arr2Item || arr1Item < arr2Item) {
      mergedArray.push(arr1Item);
      arr1Item = arr1[i];
      i++;
    } else {
      mergedArray.push(arr2Item);
      arr2Item = arr2[j];
      j++;
    }
  }

  return mergedArray;
};

mergeSortedArrays([0, 3, 5, 33], [4, 6, 434]);
