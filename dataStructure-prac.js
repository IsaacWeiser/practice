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
