// Hash maps, hash tables, dictionaries, objects - same name
// Object in JavaScript is a Hash Table

// Has key-value pairs

// Idempotent - function, given an input, always gives an output

// Implementation of hash functions - MD5, SHA-1, SHA-256

//
// Why hash tables?
//

// Insert, lookup, delete & search - O(1) - very, very fast!

let user = {
  age: 54,
  name: "Kylie",
  magic: true,
  scream: function() {
    console.log("aaaaa!");
  }
};

user.age; // O(1)
user.spell = "abracadabra"; // O(1)
user.scream(); // O(1)

// Hash collisions

// values are stored in hash buckets
// attaches different values to the same memory allocation
// when collided - Big O notation increases to O(n)

// In javascript - every hash table (object) key is stringified
// Keys are assigned at random

//
// New things in ES6
//

// Map

const a = new Map();
// Allows for every data type as key
// SORTED BY DEFAULT

// Set

const b = new Set();
// Stores only keys!

//
// Implementing a hash table
//

class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }

  // semi-private method - as per Class implementation in ES6
  // simple hashing function which allocates memory
  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }

  get(key) {
    let address = this._hash(key);
    const currentBucket = this.data[address];
    if (currentBucket) {
      for (let i = 0; i < currentBucket.length; i++) {
        if (currentBucket[i][0] === key) {
          return currentBucket[i][1];
        }
      }
    }
    return undefined;
  }

  set(key, value) {
    let address = this._hash(key);
    if (!this.data[address]) {
      this.data[address] = [];
    }
    this.data[address].push([key, value]);
  }

  // Will be apple to loop over all keys
  keys() {
    const keysArray = [];
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i]) {
        keysArray.push(this.data[i][0][0]);
        // because we have array in array in array
      }
    }
    return keysArray;
  }
}

const myHashTable = new HashTable(50);
myHashTable.set("grapes", 1000);
myHashTable.set("apples", 24);
myHashTable.set("oranges", 2);
myHashTable.set("watermelons", 10000);

//
// Hash table vs array
//

// Hash table - way quicker access to memory, no order

// Array - ordered, bit slower

//
// Excercise
//

// Google Question
// Find first recurring character/number
// Given an array = [2,5,1,2,3,5,1,2,4]:
// It should return 2

// Given an array = [2,1,1,2,3,5,1,2,4]:
// It should return 1

// Given an array = [2,3,4,5]:
// It should return undefined

function firstRecurringCharacter(input) {
  // Naive approach
  for (let i = 0; i < input.length; i++) {
    for (let j = i + 1; j < input.length; j++) {
      if (input[i] === input[j]) {
        return input[i];
      }
    }
  }
  return undefined;
} // O(n^2)
// Space complexity - O(1)

function firstRecurringCharacter2(input) {
  // Using hash table
  let map = {}; // Space complexity - O(n)
  for (let i = 0; i < input.length; i++) {
    if (map[input[i]] !== undefined) {
      console.log("done? number = " + input[i]);
      return input[i];
    } else {
      map[input[i]] = i;
    }
    console.log(map);
  }
  return undefined;
} // O(n)

firstRecurringCharacter2([2, 5, 1, 2, 3, 5, 1, 2, 4]);

// Bonus... What if we had this:
// [2,5,5,2,3,5,1,2,4]
// return 5 because the pairs are before 2,2

// Depending on implementation - 1st method goes over whole array, 2nd goes only to the first recurring element

//
// Review
//

// Pros
// Fast lookups - if good collision resolution provided
// Fast inserts
// Flexible keys

// Cons
// Unordered
// Slow key iteration
