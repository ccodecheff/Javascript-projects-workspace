// This file has array inbuilt methods

let arr =["I","am","a","student"];

//**************************************************/
// Splice() - for removing array elements
//************************************************ */

let result = arr.splice(0,1); // removing 1 element at  0 index 
    console.log(result); // "I" as an output

    result= arr; 
    console.log(result); //['am', 'a', 'student']


    result.splice(0,0,"I"); // adding "I" at 0th index
    console.log(result);//['I', 'am', 'a', 'student']

    result.splice(-1,0,"Masters"); // adding Masters at 1 step from end 
    console.log(result); // ['I', 'am', 'a', 'Masters', 'student']

//**************************************************/
//       Copying array elements
//************************************************ */ 

let copiedArr = [...arr] // spread operator
    console.log(copiedArr);

    // Slice()

    console.log( arr.slice(1, 3) ); // e,s (copy from 1 to 3)
    console.log( arr.slice(-2) ); // s,t (copy from 2nd item from last till the end)

//**************************************************/
//      Note for concatenation
//************************************************ */ 
// we can concatenate object using isConcatSpreadable property which treat objects as array

let arrayLike = {
  0: "in",
  1: "Computer science",
  [Symbol.isConcatSpreadable]: true,
  length: 2  // we need to mention the length
};
    console.log( arr.concat(arrayLike) ); // ['I', 'am', 'a', 'Masters', 'student', 'in', 'Computer science']

//**************************************************/
//     foreach loop Iteration for array
//************************************************ */ 
 
arr.forEach(function(item,index,array){
    console.log("\t"+item+"  is at \t"+index+"\t in \t"+array);
});

//**************************************************/
//    Searching in array
//************************************************ */ 
 //  indexOf , includes and find(callback item, index, array)

 console.log(arr.indexOf("am"));   // at 1 index
 console.log(arr.includes("an")) // false
    let users =[
            {id:1,name:"karan"},
            {id:2,name:"nish"}
            ];
    let user = users.find(item=>item.id===2);
    console.log(user.name);


