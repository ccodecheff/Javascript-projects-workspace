// Calculate factorial of a given number

function factorial(n){
    let fact=1; // execute 1
    for(let i=n;i>0;i--) // execute 1 time
    {//console.log('executing');
    fact*=i;  // execute n
    }
   return fact; 
}
console.log(factorial(3));
//5=> 5*4*3*2*1
//Best Case: 1=> O(1)
//Avg Case: n=> O(n)
//Worst Case: n=> O(n)

// Factorial by recursion 

function factorialByRec(n){
    if(n<=1){
        return 1;
    }
    return n*factorialByRec(n-1);
}
console.log(factorialByRec(3));
    // In every fucntion call => O(1);
    //But we trigger multiple functionc calls => n function calls
    // T= n*O(1) => O(n);  