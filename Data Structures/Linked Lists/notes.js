//
// What is a linked list?
//

// Built by two linked nodes - head & tail (last node)
// It's null-terminated - last part will point to null
// Every node will point to next node

// JavaScript doesn't have pre-built linked lists data structure

// Whilst traversing (going through) linked list, it will read data from scattered memory - just like hash table
// you can delete or add at any given index, because linked list will sort itself out

// JS is garbage collected - no unused variables, if variable stops pointing to value and the value won't be used anymore - it deletes the value from the memory.

// 10 --> 5 --> 16

let myLinkedList = {
  // head node
  head: {
    value: 10,
    // pointer to next value
    next: {
      value: 5,
      next: {
        value: 16,
        next: null
      }
    }
  }
};

class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null
    };
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const newNode = {
      value: value,
      next: null
    };
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }

  prepend(value) {
    const newNode = {
      value: value,
      next: null
    };
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }
}

const myList = new LinkedList(10);