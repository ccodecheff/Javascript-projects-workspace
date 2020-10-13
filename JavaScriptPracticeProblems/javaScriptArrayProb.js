// Javascript primitive data type array problems
/* Note:
array push/pop=> like linkedList if we have to Push/pop the first element 
we can do it by using unshift()/shift()
*/

let fruits = ["Apple"];

fruits.push("Orange", "Peach");
fruits.unshift("Pineapple", "Lemon");
// ["Pineapple", "Lemon", "Apple", "Orange", "Peach"]
console.log( fruits );
fruits.pop();
console.log( fruits );
fruits.shift();
// console.log(fruits);

/*Let’s try 5 array operations.

Create an array styles with items “Jazz” and “Blues”.
Append “Rock-n-Roll” to the end.
Replace the value in the middle by “Classics”. Your code for finding the middle value should work for any arrays with odd length.
Strip off the first value of the array and show it.
Prepend Rap and Reggae to the array.*/

let styles = ["Jazz", "Blues"];
styles.push("Rock-n-Roll");
styles[Math.floor((styles.length - 1) / 2)] = "Classics";
console.log( styles.shift() );
styles.unshift("Rap", "Reggae");
console.log(styles);

// Write the function sumInput() that:

// Asks the user for values using prompt and stores the values in the array.
// Finishes asking when the user enters a non-numeric value, an empty string, or presses “Cancel”.
// Calculates and returns the sum of array items.

// To run the below code we need to link this js file to index.html page or try it in chrome console
// function sumInput() {

//     let numbers = [];
  
//     while (true) {
  
//       let value = prompt("A number please?", 0);
  
//       // should we cancel?
//       if (value === "" || value === null || !isFinite(value)) break;
  
//       numbers.push(+value);
//     }
  
//     let sum = 0;
//     for (let number of numbers) {
//       sum += number;
//     }
//     return sum;
//   }
  
//   alert( sumInput() );

// The input is an array of numbers, e.g. arr = [1, -2, 3, 4, -9, 6].
// The task is: find the contiguous subarray of arr with the maximal sum of items.
// Write the function getMaxSubSum(arr) that will return that sum.

function getMaxSubSum(arr){
let sum=0;
    for (Item of arr){
        sum+= item;
    }
    return sum;
}
console.log("sum"+ getMaxSubSum[1, -2, 3, 4, -9, 6]);