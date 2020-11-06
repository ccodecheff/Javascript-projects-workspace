// This program finds out the sum of two linkedList 
// to calculate the sum of linkedList we need to reverse it first
// leetcode example for sum of two number

// function to calculate to a new Node
function ListNode(val){
    this.value= val;
    this.next=null;
}

class LinkedList{
 
    constructor(){
        this.head= null;
        this.tail=null;
        this.length=0;
    }

    append(value){
const newNode= {value:value, next: null} // this node is appended at the last

    if(this.tail){
        this.tail.next = newNode; 
        this.length++;
    }
    this.tail = newNode; // if there is no tail node

    if(!this.head){ // for empty list
        this.head= newNode
        this.length++;
    }
    
}
// function to reverse the list 
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
  }
  // it converts the node to array in reverse order
  function nodetoarray(node){
      let list =[];
  
      while(sumNode){
      list.unshift(sumNode.value);
      sumNode=sumNode.next;
      }
      return list;
  }
// this is to calculate sum of two linkedlist and return a new linkedlist
  function sumOfLinkedList(l1,l2){
    let head = new ListNode(0);
    let node = head;
    let carry=0;

    while(l1 || l2){

        let l1val = l1?l1.value:0;
        let l2val = l2?l2.value:0;

        let sum= l1val+l2val+ carry;
        carry=0;
        let newValue = sum;

        if(sum>9){
            newValue = sum%10;
            carry=1;
        }

        node.next = new ListNode(newValue);
        node= node.next;

        if(l1){
            l1= l1.next;
        }
        if(l2){
            l2= l2.next;
        }

    }
   if(carry>0) {
    node.next= new ListNode(carry);
   }
   return head.next;
  }


   l1 = new LinkedList();
   l2= new LinkedList();
  
   l1.append(2);
   l1.append(4);
   l1.append(3);
   let revsersel1 = l1.reverse();
   console.log(revsersel1); 

   l2.append(5);
   l2.append(6);
   l2.append(4);
   let revsersel2 = l2.reverse();
   console.log(revsersel2); 

   let sumNode = sumOfLinkedList(revsersel1,revsersel2);
   console.log(sumNode);
   
// final sum
 let sum= nodetoarray(sumNode);
   console.log(sum); // 807

