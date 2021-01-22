class LinkedList1 { 

    constructor(){
        this.head= null;
        this.tail= null;
        this.length=0;
    }

    addElement(value){
        const newNode= {value:value,next:null};
        
        // if there is no head- empty list
        if(!this.head){
            this.head= newNode;
        }
        // pointer is at tail
        if(this.tail){
            this.tail.next= newNode;
        }
        //if there is no tail
        this.tail= newNode;
    }

    displayElements(){
        const element =[];
        let curNode= this.head;

        while(curNode){
            element.push(curNode);
            curNode= curNode.next;
        }

        return element;
    }

    prepend(value){
        const newNode= {value: value, next: this.head };
        this.head= newNode;
        if(!this.tail){
            this.tail= newNode;
        }
    }
    reverse()
    { let next=null;
      let prev= null;
      let curNode= this.head;

      while(curNode!=null){
        next= curNode.next;
        curNode.next= prev;
        prev= curNode;
        curNode= next;
      }
        return prev;
    }

    search(value){
       let curNode= this.head;
       
       if(!this.head){
           return null;
       }

       while (curNode){
        if(curNode.value== value){
            return curNode;
        }
        else{
            curNode= curNode.next;
        }
            } 
       return null;         
    }

    Delete(value){
        if(!this.head){
            return;
        }
        if(this.head&& this.head.value=== value){
            this.head = this.head.next ;
        }
        let curNode= this.head;
        while(curNode.next){
            if(curNode.next.value===value){
                curNode.next= curNode.next.next;
            }
            else{
                curNode= curNode.next;
            }
        if(this.tail&& this.tail.value===value){
            this.tail = curNode;
        }
            }

    }
}

LinkedList1 = new LinkedList1();
LinkedList1.addElement(1);;
LinkedList1.addElement(2);
LinkedList1.prepend(0);
LinkedList1.prepend(0);
LinkedList1.addElement(3);
LinkedList1.addElement(4);
LinkedList1.addElement(4);
console.log(LinkedList1.search(3));
console.log(LinkedList1.displayElements());
LinkedList1.Delete(0);
LinkedList1.Delete(4);
LinkedList1.Delete(4);

console.log(LinkedList1.displayElements());
//console.log(LinkedList1.reverse());

