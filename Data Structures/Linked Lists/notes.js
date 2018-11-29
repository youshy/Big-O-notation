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

class Node {
  constructor(value) {
    (this.value = value), (this.next = null);
  }
}

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
    const newNode = new Node(value);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }

  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }

  printList() {
    const array = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return array;
  }

  _traverseToIndex(index) {
    let counter = 0;
    let currentNode = this.head;
    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }

  insert(index, value) {
    // input check
    if (index >= this.length) {
      this.append(value);
      return this.printList();
    }
    const newNode = new Node(value);
    const leader = this._traverseToIndex(index - 1);
    const holdPointer = leader.next;
    leader.next = newNode;
    newNode.next = holdPointer;
    this.length++;
    return this.printList();
  }
}

const myList = new LinkedList(10);
myList.append(32);
myList.append(25);
myList.append(253);
myList.append(2626);
