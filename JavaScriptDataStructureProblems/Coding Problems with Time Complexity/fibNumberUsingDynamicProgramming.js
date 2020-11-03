// Fib-recursion by Dynamic Programming to avoid exponential growth
// Dynamic programming use an object/memory to store a stage
//And,reduce the number of iteration from O(2^n) to O(n) 

const mem={} // object mem where we can store key value n and fibByDp() state
let counter=0;

function fibByDP(n,mem){
   counter++;
   let result;
   // if mem[n] function is true it will return current state which will reduce the extra execution
   if(mem[n]) 
   return mem[n];  

   if(0===n ||1===n){
      result =1;
   }
   else{
       result=(fibByDP(n-1,mem)+fibByDP(n-2,mem));
   }
   mem[n]=result; // storing the result of each state 
   return result;
}

// Testing fib counter by recursive function
fibByDP(5,{}); // passing initial empty object
console.log(counter);
count=0;

fibByDP(10,{});
console.log(counter);
count=0;

fibByDP(20,{});
console.log(counter);
count=0;

// T= O(2n) => O(n) which is way lesser then O(n^2),O(n^3)and recusion fib O(2^n)

/*For example-: fibByDP(4) => fibByDP(3) and fibByDP(2)
            //Left Iteration
                            fibByDP(3)=> fibByDP(2) and fibByDP(1)      // mem[n] stores fibByDP(2)
                                         fibByDP(2)=>fibByDP(1) and fibByDP(0)
            // when we reach to root mem[n] i.e mem[4] it will return the saved result =>3
            
             */                                        