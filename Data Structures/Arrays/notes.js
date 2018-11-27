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
