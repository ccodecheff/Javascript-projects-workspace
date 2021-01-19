// this is a circular linkedlist insertion with no tail pointer
class CircularLinkedList{
    
    constructor(){
        this.head= null;
        this.size=0;
    }
    
    createNode(element){
        return{element, next:null};
    }

    push(element){
        let node = this.createNode(element);
        let current = this.head;
        if (current == undefined) {
            this.head = node;
            node.next = this.head;
        } else {
            while(current.next != null){
                current = current.next;
            }
            current.next = node;
            node.next = this.head;
        }
        this.size++;
        return this;

    }

}

node = new CircularLinkedList();
node.push(1);
node.push(2);
console.log(node.push(3));
console.log(node);