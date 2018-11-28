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
