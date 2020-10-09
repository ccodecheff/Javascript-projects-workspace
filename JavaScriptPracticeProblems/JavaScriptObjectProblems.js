// Practising Javascript Objects

// Program 1 to check if an object if empty or not 

function isempty(obj){
    for(key in obj){
        return false;
    }
    return true;
}

let obj1= {};
let obj2={id:1};
console.log(isempty(obj1));
console.log(isempty(obj2));


// program 2 Foreach() function 
var sum = 0;
var numbers = [65, 44, 12, 4];
// forEach(item,index,array)
// here item is numbers, index it is iterating over item and new array is sum
numbers.forEach(myFunction); 

function myFunction(item) {
  sum += item;
  console.log(sum);
}


// deleting a function
delete obj1.id;
console.log(obj1);

// Note two objects are treated independently even if they are empty
let a = {};
let b = {}; // two independent objects
let result = ( a == b ); // false
console.log(result);

// creating a refrence

let name= {name:"karan"};
let refName= name;
console.log(refName);


//Use case of this operator using arrow function
let user = {
        name: "karan",
    sayHi() {
      let arrow = () => console.log(this.name);
      arrow();
    }
  };
  
  user.sayHi(); // karan

  // ladder object to that allows to go up, down and show steps in chain
  let ladder = {
    step: 0,
    up() {
      this.step++;
      return this;
    },
    down() {
      this.step--;
      return this;
    },
    showStep: function() { // shows the current step
      console.log( this.step );
    }
  };
  
ladder.down().up().up().up().showStep(); // return 2

// Constructor Functions

// Comparing constructor with an object obj
let obj = {};

function A() { return obj; }
function B() { return obj; }


  console.log(new A() == new B());// false


 /* Create a constructor function Calculator that creates objects with 3 methods:

read() asks for two values using prompt and remembers them in object properties.
sum() returns the sum of these properties.
*/

function Calculator(){

    this.read = function(){
        this.a= +4; //+ is added before number to expicitly type caste into numbers
        this.b= +2;
        //this.b= +prompt('b',0);
    }; 

    this.sum = function(){
        return (this.a+this.b);
    };

}
    let calculator = new Calculator();
    calculator.read();
    console.log("sum:"+" "+calculator.sum());
    
   /* create a constructor function Accumulator(startingValue).

    Object that it creates should:
    
    Store the “current value” in the property value. The starting value is set to the argument of the constructor startingValue.
    The read() method should use prompt to read a new number and add it to value.
    In other words, the value property is the sum of all user-entered values with the initial value startingValue.
   */
   
  function Accumulator(startingValue){
    this.value= startingValue;
    
    this.read = function(){
        this.value+= +1; // here +operator is added to explicitly typecast it into  number
    };

  }
  
  let accumulator = new Accumulator(1);
  accumulator.read();
  accumulator.read();
  console.log("Accumulator value"+" "+accumulator.value);



  // Symbol type - which allow us to create hidden properties

  let user1 = { // belongs to another code
    name: "John"
  };
  
  let id = Symbol("id");
  
  user1[id] = 1;
  console.log(user1.id);  // undefiend becoc id(string type) is not a part of user1 object
  console.log(user1[id]); // output 1 becoz now we are accessing the value of Symbol "id" 

  // Object to primitive conversion

  let user2 = {
    name: "karan",
    num: 1000,
  
    // for hint="string"
    toString() {
      return `{name: "${this.name}"}`;
    },
  
    // for hint="number" or "default"
    valueOf() { // return an object
      return this.num;
    }
  
  };
  
  console.log(user2); // toString -> {name: "karan"} return the object in string
  console.log(+user2); // valueOf -> 1000
  console.log(user2 + 500); // valueOf -> 1500