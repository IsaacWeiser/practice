// stack practice
class Stack {
  constructor() {
    this.items = [];
    this.count = 0;
  }

  //method for adding element to the top of the stack
  push(element) {
    //this.items.push(element);
    this.items[this.count] = element;
    console.log(`${element} added to ${this.count}`);
    this.count++;
    return this.count - 1;
  }

  //method for removing the most recent item
  pop() {
    if (this.count == 0) {
      return undefined;
    }
    let delItem = this.items[this.count - 1];
    this.count--;
    console.log(`${delItem} removed`);
    return delItem;
  }

  // check top element in stack
  peek() {
    console.log(`top element is ${this.items[this.count]}`);
    return this.items[this.count];
  }

  //method to check if stack is empty
  isEmpty() {
    this.count == 0
      ? console.log("this bit is empty, yeet")
      : console.log("this aint empty chief");
  }

  //method to get the size of the stack
  size() {
    console.log(`${this.count} item(s)`);
  }

  //method to print stack elements
  print() {
    for (let i = 0; i < this.count; i++) {
      console.log(`${this.items[i]} `);
    }
  }
}

const stack = new Stack();

stack.push(100);
stack.push(200);
stack.push(300);

stack.pop();
console.log(stack.pop());

stack.peek();

stack.isEmpty();
stack.size();
stack.print();

// queue practice
function queue() {
  arr = [];

  //prints out the data
  this.print = () => {
    for (let i = 0; i < arr.length; i++) console.log(`print: ${arr[i]}`);
  };

  //adds data
  this.enqueue = (el) => {
    arr.push(el);
  };

  //priority feature
  this.priorityEnqueue = (element, position) => {
    arr.splice(position - 1, 0, element);
    console.log(arr);
  };

  //removes first item and returns its value
  this.dequeue = () => {
    const el1 = arr[0];
    const copy = arr.slice(0);
    arr = [];
    for (let i = 1; i < copy.length; i++) {
      arr.push(copy[i]);
    }
    return el1;
  };

  //return first data element
  this.front = () => {
    console.log(`front: ${arr[0]}`);
    return arr[0];
  };

  //determines whether data is empty or not
  this.isEmpty = () => {
    if (arr.length == 0) {
      return true;
    }
    return false;
  };

  //determine amount of data
  this.size = () => {
    return arr.length;
  };
}

var q = new queue();
console.log(q.isEmpty());
q.enqueue("abc");
q.enqueue(123);
q.enqueue("def");

q.dequeue();

q.print();
q.front();
console.log(q.isEmpty());
console.log(q.size());

q.priorityEnqueue("test", 2);

//linked list

//node
function Node(element) {
  //node data
  this.element = element;

  // pointer to the next node
  this.next = null;
}

function linkedList() {
  let length = 0;
  let head = null;

  //return size
  this.size = () => {
    return length;
  };

  //return head
  this.head = () => {
    return head;
  };

  //
  this.add = (element) => {
    var node = new Node(element);
    if (head == null) {
      head = node;
    } else {
      var currentNode = head;
      while (currentNode.next) {
        currentNode = currentNode.next;
      }
      currentNode.next = node;
    }
    length++;
  };

  //
  this.remove = (element) => {
    var currentNode = head;
    var previousNode;
    if (currentNode.element === element) {
      head = currentNode.next;
    } else {
      while (currentNode.element !== element) {
        previousNode = currentNode;
        currentNode = currentNode.next;
      }
      previousNode.next = currentNode.next;
    }
    length--;
  };

  // checks to see if the list is empty
  this.isEmpty = function () {
    return length === 0;
  };

  //
  this.indexOf = function (element) {
    var currentNode = head;
    var index = -1;
    while (currentNode) {
      index++;
      if (currentNode.element === element) {
        return index;
      }
      currentNode = currentNode.next;
    }
    return index;
  };

  //returns the element held at an index
  this.elementAt = function (index) {
    var currentNode = head;
    var count = 0;
    while (count < index) {
      count++;
      currentNode = currentNode.next;
    }
    return currentNode.element;
  };

  //
  this.addAt = function (index, element) {
    var node = new Node(element);
    var currentNode = head;
    var previousNode;
    var currentIndex = 0;
    if (index > length) {
      return false;
    }
    if (index === 0) {
      node.next = currentNode;
      head = node;
    } else {
      while (currentIndex < index) {
        currentIndex++;
        previousNode = currentNode;
        currentNode = currentNode.next;
      }
      node.next = currentNode;
      previousNode.next = node;
    }
    length++;
  };

  //
  this.removeAt = function (index) {
    var currentNode = head;
    var previousNode;
    var currentIndex = 0;
    if (index < 0 || index >= length) {
      return null;
    }
    if (index === 0) {
      head = currentIndex.next;
    } else {
      while (currentIndex < index) {
        currentIndex++;
        previousNode = currentNode;
        currentNode = currentNode.next;
      }
      previousNode.next = currentNode.next;
    }
    length--;
    return currentNode.element;
  };
}

//set
function MySet() {
  var collection = [];
  this.has = function (element) {
    return collection.indexOf(element) !== -1;
  };
  this.values = function () {
    return collection;
  };
  this.size = function () {
    return collection.length;
  };
  this.add = function (element) {
    if (!this.has(element)) {
      collection.push(element);
      return true;
    }
    return false;
  };
  this.remove = function (element) {
    if (this.has(element)) {
      index = collection.indexOf(element);
      collection.splice(index, 1);
      return true;
    }
    return false;
  };
  this.union = function (otherSet) {
    var unionSet = new MySet();
    var firstSet = this.values();
    var secondSet = otherSet.values();
    firstSet.forEach(function (e) {
      unionSet.add(e);
    });
    secondSet.forEach(function (e) {
      unionSet.add(e);
    });
    return unionSet;
  };
  this.intersection = function (otherSet) {
    var intersectionSet = new MySet();
    var firstSet = this.values();
    firstSet.forEach(function (e) {
      if (otherSet.has(e)) {
        intersectionSet.add(e);
      }
    });
    return intersectionSet;
  };
  this.difference = function (otherSet) {
    var differenceSet = new MySet();
    var firstSet = this.values();
    firstSet.forEach(function (e) {
      if (!otherSet.has(e)) {
        differenceSet.add(e);
      }
    });
    return differenceSet;
  };
  this.subset = function (otherSet) {
    var firstSet = this.values();
    return firstSet.every(function (value) {
      return otherSet.has(value);
    });
  };
}

//hash table
function hash(string, max) {
  var hash = 0;
  for (var i = 0; i < string.length; i++) {
    hash += string.charCodeAt(i);
  }
  return hash % max;
}

function HashTable() {
  let storage = [];
  const storageLimit = 4;

  this.add = function (key, value) {
    var index = hash(key, storageLimit);
    if (storage[index] === undefined) {
      storage[index] = [[key, value]];
    } else {
      var inserted = false;
      for (var i = 0; i < storage[index].length; i++) {
        if (storage[index][i][0] === key) {
          storage[index][i][1] = value;
          inserted = true;
        }
      }
      if (inserted === false) {
        storage[index].push([key, value]);
      }
    }
  };

  this.remove = function (key) {
    var index = hash(key, storageLimit);
    if (storage[index].length === 1 && storage[index][0][0] === key) {
      delete storage[index];
    } else {
      for (var i = 0; i < storage[index]; i++) {
        if (storage[index][i][0] === key) {
          delete storage[index][i];
        }
      }
    }
  };

  this.lookup = function (key) {
    var index = hash(key, storageLimit);
    if (storage[index] === undefined) {
      return undefined;
    } else {
      for (var i = 0; i < storage[index].length; i++) {
        if (storage[index][i][0] === key) {
          return storage[index][i][1];
        }
      }
    }
  };
}

//tree
class Node {
  constructor(data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  add(data) {
    const node = this.root;
    if (node === null) {
      this.root = new Node(data);
      return;
    } else {
      const searchTree = function (node) {
        if (data < node.data) {
          if (node.left === null) {
            node.left = new Node(data);
            return;
          } else if (node.left !== null) {
            return searchTree(node.left);
          }
        } else if (data > node.data) {
          if (node.right === null) {
            node.right = new Node(data);
            return;
          } else if (node.right !== null) {
            return searchTree(node.right);
          }
        } else {
          return null;
        }
      };
      return searchTree(node);
    }
  }

  findMin() {
    let current = this.root;
    while (current.left !== null) {
      current = current.left;
    }
    return current.data;
  }

  findMax() {
    let current = this.root;
    while (current.right !== null) {
      current = current.right;
    }
    return current.data;
  }

  find(data) {
    let current = this.root;
    while (current.data !== data) {
      if (data < current.data) {
        current = current.left;
      } else {
        current = current.right;
      }
      if (current === null) {
        return null;
      }
    }
    return current;
  }

  isPresent(data) {
    let current = this.root;
    while (current) {
      if (data === current.data) {
        return true;
      }
      if (data < current.data) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
    return false;
  }

  remove(data) {
    const removeNode = function (node, data) {
      if (node == null) {
        return null;
      }
      if (data == node.data) {
        // no child node
        if (node.left == null && node.right == null) {
          return null;
        }
        // no left node
        if (node.left == null) {
          return node.right;
        }
        // no right node
        if (node.right == null) {
          return node.left;
        }
        // has 2 child nodes
        var tempNode = node.right;
        while (tempNode.left !== null) {
          tempNode = tempNode.left;
        }
        node.data = tempNode.data;
        node.right = removeNode(node.right, tempNode.data);
        return node;
      } else if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      } else {
        node.right = removeNode(node.right, data);
        return node;
      }
    };
    this.root = removeNode(this.root, data);
  }
}
