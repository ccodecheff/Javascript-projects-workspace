// THis program is for linked list append, prepend , outputting and deletion

export class LinkedList{
 
    constructor(){
        this.head= null;
        this.tail=null;
        this.length=0;
    }

    append(value){
const newNode= {value:value, next: null} // this node is appended at the last

    if(this.tail){
        this.tail.next = newNode; 
       
    }
    this.tail = newNode; // if there is no tail node

    if(!this.head){ // for empty list
        this.head= newNode
      
    }
    this.length++; 
    }
    deleteHead(){
     if(!this.head){
         return null;
     }   

     const deletedItem= this.head;
     
     if(this.head.next){
         this.head= this.head.next;
     }
     else{
         this.head=null;
         this.tail= null;
     }
     return deletedItem;
    }
    
 prepend(value){
    const newNode= { value: value, next: this.head}
      
            this.head= newNode;
        if(!this.tail){ // if the list is empty 
            this.tail = newNode;
             
        }
        this.length++;
    }
delete(value){
    if(!this.head){
        return;
    }
    while(this.head && this.head.value===value){
        console.log("head"+this.head.value);
        this.head = this.head.next;
        this.length--;
    }
    let curNode = this.head;
            
    while(curNode.next){
            if(curNode.next.value=== value){
            curNode.next= curNode.next.next;            
            this.length--;    
        }
            else{
                curNode= curNode.next;
            }
        }
            if(this.tail.value===value){
                this.tail= curNode;
                this.length--;
            }
        }
insertAfter(value,aftervalue){
    const existingNode= this.find(aftervalue);
    if(existingNode){
        const newNode = {value:value, next:existingNode.next};
        existingNode.next=newNode; // inserting after existingNode
        this.length++;
    }
}

    find(value){
    
    if(!this.head){
       // return " Node not fouund";
       return null;
    }
    let curNode = this.head;

    while(curNode){
        if(curNode.value===value){
            //return curNode.value+" "+"found! ";
            return curNode;
        }
        else{
            curNode= curNode.next;
        } 
    } 
    //return "Node not found";
    return null;  
}
    size(){
        return this.length;
    }

    toArray(){
    const elements= [];
    let curNode = this.head; // setting the pointer at head
    
    while(curNode){ // traversing till we get null i.e tail node
        elements.push(curNode); // pushing all the element in the array
        curNode= curNode.next;
    } 
        return elements 
         }

    reverse(){
        let next = null;
        let prev = null;
        let curNode = this.head;

        while(curNode!=null){
            next= curNode.next;
            curNode.next= prev;
            prev = curNode;
            curNode= next;
            
        }
        
       return prev; 
    }

    } // end of class 


LinkedList1 = new LinkedList();
LinkedList1.append(1);
LinkedList1.append(1);
LinkedList1.append(2);
LinkedList1.append(3);
LinkedList1.append(3);
LinkedList1.append(4);
LinkedList1.append(5); 
console.log(LinkedList1.toArray());
console.log("size"+LinkedList1.size());

LinkedList1.prepend("Second value");
LinkedList1.prepend("First value");
LinkedList1.prepend(1);

console.log(LinkedList1.toArray());

LinkedList1.delete(1);
LinkedList1.delete("First value")
LinkedList1.delete(3);

console.log(LinkedList1.toArray());

console.log(LinkedList1.find(1));
console.log(LinkedList1.find(4));

LinkedList1.insertAfter(6,5);
console.log(LinkedList1.toArray());
// size of linkedList 
console.log(LinkedList1.size());

// reverse linkedList 
console.log(LinkedList1.reverse());

