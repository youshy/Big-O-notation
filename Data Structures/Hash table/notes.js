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
}

const myHashTable = new HashTable(50);
