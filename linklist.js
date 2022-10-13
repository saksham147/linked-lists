
function Node(v = null, next = null) {
  return {
    value: v,
    next: next,
  }
}

function LinkedList() {
  return {
    head: null,

    // Append new node at the end of the list with value(v)
    append(v) {
      // newNode object created with property data
      let newNode = Node(v);

      // when head = null, head will point to the newNode
      // else find end of tail and update the tail's next pointer
      if (this.head === null) {
        this.head = newNode;
      } else {
        let tail = this.head;
        while (tail.next !== null) {
          tail = tail.next;
        }
        tail.next = newNode;
      }
    },

    // Prepend new node at the beginning of the list with value(v)
    prepend(v) {
      // newNode object created with property data
      let newNode = Node(v, this.head);

      // previous pointer now points to newNode
      this.head = newNode;
    },

    // Return total number of nodes in the list
    size() {
      let count = 0;
      let current = this.head;
      while (current !== null) {
        count += 1;
        current = current.next;
      }
      console.log('size(): ', count);
      return count;
    },

    // Return the first node in the list
    findHead() {
      console.log('findHead(): ', this.head.value)
      return this.head.value;
    },

    // Return the last node in the list
    tail() {
      let tail = this.head;
      while (tail.next) {
        tail = tail.next;
      }
      console.log('tail(): ', tail.value);
      return tail.next;
    },

    // Return the node at the given index
    at(index) {
      let i = 0;
      let current = this.head;
      if (index < 0) return;
      while (i < index) {
        i += 1;
        if (current.next) {
          current = current.next;
        } else {
          return console.error(`Out of range. Max value is ${this.size() - 1}`)
        }
      }
      console.log(`at(${index}): `, current)
      return current;
    },

    // Remove the last element from the list
    pop() {
      let current = this.head;
      while (current.next.next) {
        current = current.next;
      }
      current.next = null;
      console.log('pop() :', current);
      return current;
    },

    // Return true if the value is in the list and otherwise returns false
    contains(v) {
      let current = this.head;
      while (current) {
        if (current.value === v) {
          console.log(`contains(${v}): `, true)
          return true;
        }
        current = current.next;
      }
      console.log(`contains(${v}): `, false)
      return false;
    },

    // Return the index of the node containing value, or null if not found
    find(v) {
      let current = this.head;
      let i = 0;
      while (current) {
        if (current.value === v) {
          console.log(`find(${v}): `, i);
          return i;
        }
        i += 1;
        current = current.next;
      }
      console.log(`find(${v}): `, null)
      return null
    },

    // Print the linked list to the console
    toString() {
      let str = '';
      let current = this.head;
      while (current) {
        if (!current.next) {
          str += `(${current.value}) -> null`;
        } else {
          str += `(${current.value}) -> `;
        }
        current = current.next;
      }
      console.log('toString(): ', str)
      return str;
    },

    // Insert new node with the provided value at the given index
    insertAt(v, index) {
      let current = this.head;
      let i = 0;
      while (current) {
        if (i === index - 1) {
          const newNode = Node(v, current.next);
          current.next = newNode;
        }
        current = current.next;
        i += 1;
      }
    },

    // Remove the node at the given index
    removeAt(index) {
      let current = this.head;
      let i = 0;
      while (current) {
        if (i === index - 1) {
          current.next = current.next.next
        }
        i += 1;
        current = current.next;
      }
    },
  }
}

const list = LinkedList();
list.append(2);
list.prepend(1);
list.prepend(0);
list.append(3);
list.append(4);
list.append(5);
list.size();
list.findHead();
list.tail();
list.at(1);
list.pop();
list.size();
list.contains(4);
list.find(4);
list.toString();
list.insertAt('insert', 3);
list.toString();
list.removeAt(4);
list.toString();