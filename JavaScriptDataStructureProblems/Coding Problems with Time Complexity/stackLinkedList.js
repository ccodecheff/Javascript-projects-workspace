import { LinkedList } from './linked-list.js';

class  StackLinkedList{
    constructor() {
      this.list = new LinkedList();
    }
  
    push(value) {
      this.list.prepend(value);
    }
  
    pop() {
      return this.list.deleteHead();
    }
  
    isEmpty() {
      return !this.list.head;
    }
  
    toArray() {
      return this.list.toArray();
    }
  }
  
  
  const stack = new StackLinkedList();
  stack.push('FIRST');
  stack.push('MID');
  stack.push('LAST');
  
  console.log(stack.toArray());
  
  console.log(stack.pop());
  
  console.log(stack.toArray());
  
  console.log(stack.pop());
  console.log(stack.pop());
  
  console.log(stack.toArray());