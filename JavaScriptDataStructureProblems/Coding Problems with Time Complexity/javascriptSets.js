// Set should be used where order is not important and Finding& Deleting is easy and fast in Set 
let ids = new Set([1,2]);

ids.add('karan');
ids.add('rathore');
ids.add([3,4]);
ids.add(5);

for(item of ids){
   // console.log(item);
}

    ids.forEach(item=> {
    console.log(item);
    });

    ids.delete(5);

console.log(ids.has(5));