class Queue{
    // queue follows FIFO approach First in first out 
    // For example messaging apps
    constructor() {
        this.items = [];
      }

    enqueue(value) {
    this.items.unshift(value);
    }

    push(value) {
        this.items.push(value);
      }

    dequeue(){
        // removing the Top element
      return this.items.pop();
    }

    isEmpty(){
        return this.items.length===0;
    }

    toArray(){
        return this.items.slice();
    }
}

const queue = new Queue();
queue.enqueue("A");
queue.enqueue(1);
queue.push("B");
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
console.log(queue.toArray());
queue.dequeue();
console.log(queue.toArray());
