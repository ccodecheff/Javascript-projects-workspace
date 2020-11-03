var obj = {
    firstName: "Karan",
    age: 26,
    hobbies:['singing','dancing'],
    // objects can also have functions in javascripts
    greet(){
        console.log("Hi, I am "+ this.firstName);
    }

}
// object is not iterable 
obj.lastName= "rathore";

console.log(obj);
console.log(obj['firstName']);
console.log(obj.hobbies[0]);
// deleting a value 
delete obj.age;
obj.greet();