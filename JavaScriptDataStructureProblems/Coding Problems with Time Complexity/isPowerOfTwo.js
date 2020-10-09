// Check if a given number is power of two or not
// O(1)=>O(logn)=>O(n) 
function isPowerOfTwo(num){
    if(num<1){
        return false;
    }
    let dividednumber =num;
    while(dividednumber!==1){
        console.log("executing..");
        if(dividednumber%2!==0){
            return false;
        }
        dividednumber=dividednumber/2;
    }
    return true;
}

//Best case: odd number or less then 1   O(1)
//Avg Case: O(logn) 
//Worst case: O(logn)

// this example has complexity of logn becoz it's value lies in between O(1) and O(n)
console.log(isPowerOfTwo(16)); // highest execution 
console.log(isPowerOfTwo(20)); //second highest
console.log(isPowerOfTwo(10)); // least 