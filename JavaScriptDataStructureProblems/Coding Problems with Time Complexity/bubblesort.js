// Bubble sort 
let arr=[2,1,-10,-2,10,11];
function sort(arr){
 //let result = [...arr];
 for (let i = 0; i < arr.length; i++) { //1
   for (let j = i + 1; j < arr.length; j++) {// 1
     if (arr[i] > arr[j]) { // n time atleast  for outer loop
       let temp = arr[j]; // n*n time for both loops
       arr[j] = arr[i];
       arr[i] = temp;
     }
   }
 }
 return arr;
}
//1+1+n+n =2+2n => n for best case
console.log("sorted array asec:"+" "+sort(arr));
// Best case: if array is already sorted we don't need access if loop
//=> O(n)
// Avg Case: random array =>O(n^2)
// Worst Case: arrange in opp order => O(n^2)