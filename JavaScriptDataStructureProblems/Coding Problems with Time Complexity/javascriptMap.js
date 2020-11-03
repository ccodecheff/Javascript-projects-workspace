// Maps are used to store pure data storage, it allows ordered list
// every key values are iterable and stored in the form of array,
// keys are unique if we add the same key it will override the existing key value.
var result = new Map();

result.set("avg",1.2);
result.set("sum",10);

const country ={ name: "india"};

result.set(country,"Namaste");

console.log(result);

// for(item of result){
//     console.log(item);
// }

let myMap = new Map()

let keyString = 'a string'
let keyObj    = {}
let keyFunc   = function() {}

// setting the values
myMap.set(keyString, "value associated with 'a string'")
myMap.set(keyObj, 'value associated with keyObj')
myMap.set(keyFunc, 'value associated with keyFunc')

// getting the values
myMap.get(keyString)    // "value associated with 'a string'"
//console.log(myMap.get(keyObj))       // "value associated with keyObj"
myMap.get(keyFunc)      // "value associated with keyFunc"

console.log(myMap.size);

let arr = [['key1',1],['key2',3]]
myMap.set("dataArray",arr);
console.log(myMap);
console.log(myMap.get('key1'));
console.log([...myMap]); // transforming map into array

// traversing by string value in Map 
console.log(myMap.get('a string'));// "value associated with 'a string'"

// for (let [key, value] of myMap) {
//     console.log(key + ' = ' + value)
//   }

//   for (let key of myMap.keys()) {
//     console.log(key)
//   }

  
//   for (let value of myMap.values()) {
//     console.log(value)
//   }

  
//   for (let [key, value] of myMap.entries()) {
//     console.log(key + ' = ' + value)
//   }