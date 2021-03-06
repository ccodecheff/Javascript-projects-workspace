function binarySearch(sortedArr,element){
    let startIndex=0;
    let endIndex=sortedArr.length-1;

    while(startIndex<=endIndex){
        let middleIndex= startIndex+ Math.floor(endIndex-startIndex)/2
        console.log("running");    
        if(sortedArr[middleIndex]===element){
            return middleIndex;
        }
        if(sortedArr[middleIndex]<element){
            startIndex= middleIndex+1;
        }
        else{
            endIndex= middleIndex-1;
        }
    }

}
let arr=[1,2,3,10,22,33,44];
// Best Case: if the Item is in middle-> O(1)
console.log(binarySearch(arr,10));

// worst case: if the Item is in begining and last => O(logn); 
// because with every iteration the array is spliting into 2 
console.log(binarySearch(arr,1));
console.log(binarySearch(arr,44));

// Avg Case: array element could be anywhere => O(logn); 
console.log(binarySearch(arr,33));

// Binary search by recursion

function binarySearchbyrecursion(sortedArr,element,start,end){
    if(start>end) return false;

    let middleIndex=  Math.floor(end+start)/2
     console.log("running binary Search by recursion ");    

     if(sortedArr[middleIndex]===element){
            return middleIndex;
        }
     else if(sortedArr[middleIndex]<element){
            //startIndex= middleIndex+1;
            return binarySearchbyrecursion(sortedArr,element,middleIndex+1,end);
        }
      else {
            //endIndex= middleIndex-1;
            return binarySearchbyrecursion(sortedArr,element,start,middleIndex-1);
        }  
}

    console.log(binarySearchbyrecursion(arr,44,0,arr.length-1));
    //Best=> O(1)/Avg/Worst case is same O(logn) as above 

   // Concepts of Master Thereom 

    /* equals the number of subproblems (number of recursion splits)
    b equals the relative subproblem size (input reduction per split)
    f(n)equals the runtime outside of the recursionMaster Theorem
    Runtime of recursion: O(𝑛^(log baseb ^a))
    Overall algorithm runtime (time complexity)-three cases:
     
    Recursion does more work O(𝑛^(log baseb ^a))
     Same work inside and outside of recursionO(𝑛^(log baseb ^a)*log n)
     Non-recursive part does more workO(fn(n))
    */

// a = 1
// b = 2 // in how many parts we are splitting
// O(n^logb a) => O(n^log2 1) => O(n^0) => O(1) // for Item is in middle
// Overall algorithm time complexity:
// O(n^logb a * log n) => O(1 * log n) => O(log n)