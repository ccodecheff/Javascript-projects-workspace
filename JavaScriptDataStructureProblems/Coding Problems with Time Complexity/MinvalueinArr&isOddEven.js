//Assignment 1 Find the Smallest value in a array

function findMinArray(arr){
   let min= arr[0]; // execute 1 times
   for(let i=0;i<arr.length;i++){ // execute 1 times
      if(arr[i+1]<min){ //execute n i.e arr.length times 
         min=arr[i+1];// execute n times in avg case and worst case
      }
   }
   return min; // compile 1 time 
}
console.log("Min value in array"+" "+findMinArray([-12,1,0,-3]));

// Time complexity-> 1+1+n+n+1 => 3+2n = 2n=n= O(n) 
//Linear constant-
// Best case: O(n) Sorted List as we don't make it to if check [1,2,3]
// Average Case: O(n) [3,1,2  ]
//Worst Case: O(n) reverse sorted list [3,2,1]



//Alternative by using for of loop

// function findMinArray(arr){
//    let min= arr[0]; // execute 1 times
//    for(const num of arr){ // execute 1 times
//       if(num<min){ //execute n i.e arr.length times
//          min=num;// execute n times
//       }
//    }
//    return min; // execute 1 time 
// }

// console.log("Min value in array"+" "+findMinArray([2,-4,0,-3]));



// Assignemnt 2 Check if a given number is odd or even
function checkOddEven(n){
return (n%2==0)?'even':'odd';; // 1 time
}

// Time Complexity-> 1=> O(1) Constant time complexity
let n = -3;
console.log("The given number is: "+" "+checkOddEven(n));
