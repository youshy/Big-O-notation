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

class SingleNode {
  constructor(value) {
    (this.value = value), (this.next = null);
  }
}

class SingleLinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null
    };
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const newNode = new SingleNode(value);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }

  prepend(value) {
    const newNode = new SingleNode(value);
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
    const newNode = new SingleNode(value);
    const leader = this._traverseToIndex(index - 1);
    const holdPointer = leader.next;
    leader.next = newNode;
    newNode.next = holdPointer;
    this.length++;
    return this.printList();
  }

  remove(index) {
    const leader = this._traverseToIndex(index - 1);
    const toDelete = leader.next;
    leader.next = toDelete.next;
    this.length--;
    return this.printList();
  }

  reverse() {
    if (!this.head.next) {
      return this.head;
    }
    let first = this.head;
    this.tail = this.head;
    let second = first.next;
    while (second) {
      const temp = second.next;
      second.next = first;
      first = second;
      second = temp;
    }
    this.head.next = null;
    this.head = first;
    return this.printList();
  }
}

const myList = new SingleLinkedList(10);
myList.append(32);
myList.append(25);
myList.append(253);
myList.append(2626);

//
// Doubly linked lists
//

// One more pointer to show also previous node (not only next one)

class DoubleNode {
  constructor(value) {
    (this.value = value), (this.next = null), (this.prev = null);
  }
}

class DoublyLinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
      prev: null
    };
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const newNode = new DoubleNode(value);
    newNode.prev = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }

  prepend(value) {
    const newNode = new DoubleNode(value);
    newNode.next = this.head;
    this.head.prev = newNode;
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
    const newNode = new DoubleNode(value);
    const leader = this._traverseToIndex(index - 1);
    const follower = leader.next;
    leader.next = newNode;
    newNode.prev = leader;
    newNode.next = follower;
    follower.prev = newNode;
    this.length++;
    return this.printList();
  }

  // TO RE-IMPLEMENT

  // remove(index) {
  //   const leader = this._traverseToIndex(index - 1);
  //   const toDelete = leader.next;
  //   leader.next = toDelete.next;
  //   this.length--;
  //   return this.printList();
  // }
}

const doubleList = new DoublyLinkedList(10);

//
// Single vs double?
//

// Single - easier implementation, easy on memory, can be traversed only one way
// Double - traversed from both sides, rather complex and harder on memory

//
// To sum up
//

// Pros
// Fast Insertion
// Fast Deletion
// Ordered
// Flexible Size

// Cons
// Slow lookup
// More memory
