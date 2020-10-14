// This file contains example problems of array inbuilt function

//prob 1: Write the function camelize(str) that changes dash-separated words like “my-short-string” into camel-cased “myShortString”
//camelize("background-color") == 'backgroundColor';
function camelize(str){
    let splitArr=str
    .split('-') // splits 'my-long-word' into array ['background', 'color']
    .map(
      // capitalizes first letters of all array items except the first one
      // converts ['background', 'color'] into ['background', 'Color']
      (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
    ).join(''); 

    console.log("camelCase: "+splitArr);
    return splitArr;
}
console.log(camelize("background-color")); //backgroundColor

//prob2 Write a function filterRange(arr, a, b) that gets an array arr, looks for elements with values higher or equal to a and lower or equal to b and return a result as an array.
//  a<=arr<=b
let arr = [5, 3, 8, 1];
function filterRange(arr,a,b){
   return arr.filter(item=> item>=a&&item<=b);
   }

let filtered = filterRange(arr, 1, 4);
    console.log(filtered);
 
// prob 3 filterinRange(arr,a,b) but without filter function 
function filterinRange(arr,a,b){
    var result=[]; 
    for(let i=0; i<arr.length; i++){  
        let dataArr = arr[i];
        if(dataArr>=a && dataArr<=b){

            result.push(dataArr);
        }
    }
    return result;
}
 // Time complexity : O(n)
  filtered = filterRange(arr, 1, 4);
     console.log(filtered);

// prob 4 removing duplicate in array 

function removeDuplicates(array) {
    return array.filter((a, b) => array.indexOf(a) === b);
}
console.log(removeDuplicates([1,1,2,2,3,4,4]));

function unique(arr) {
    let uniqueArr = [];
  
    for (let str of arr) {
      if (!uniqueArr.includes(str)) {
        uniqueArr.push(str);
      }
    }
  
    return uniqueArr;
  }

  function uniqueByFilter(arr) {
    return arr.filter((item, index) => !arr.includes(item, index+1 ));
  }
  
  let strings = ["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O"
  ];
  
  console.log( unique(strings) ); // Hare, Krishna, :-O
  console.log(uniqueByFilter(strings));

// prob 5 Write the code that converts it into an array of names and age and again wrap into object.
let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let users = [ john, pete, mary ];

let userObject = users.map(item=>({
    name: item.name,
    age: item.age
  }));

let age= users.map(item=>item.age);
console.log(userObject); 
console.log(age);

 // prob 6 sort users by age
 
 let sortedByAge = users.sort((a,b)=>a.age-b.age);
 console.log(sortedByAge);



// prob 7 Write the function shuffle(array) that shuffles (randomly reorders) elements of the array.
  function shuffle (arr){
      let shuffledArr= arr.sort(()=>Math.random()-0.5);
      return shuffledArr;
        
  } 
  console.log(shuffle(arr));


