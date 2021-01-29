import {LinkedList} from './linked-list.js';

class QueueLinkedList{
    constructor(){
        this.list= new LinkedList();
    }
    enqueue(value){
        this.list.append(value);
    }

    dequeue(){
        return this.list.deleteHead();
    }

    toArray(){
        return this.list.toArray();
    }

}

const queue = new QueueLinkedList();
queue.enqueue("A");
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
console.log(queue.toArray());
queue.dequeue();
console.log(queue.toArray());
