// Linear Search Algo for Array data
function lSearch(n,arr){

    for(let item of arr){   //1
        if(item===n){ //1 
            return true; // till the Item is not found or atleast runs till n if the item is not there
        }
        else return false; 
    }
}
console.log(lSearch(2,[3,1,-2,0,11]));
// Best case: if the given number is in begnining if loop will run only once
// => 1+1+1= 3=> O(1);

// averega case: if the given number is in between 1+1+n/2 => 2+n/2 => O(n)

//Worst case: if the number is not there in list of in the last index
// 1+1+n=> O(n)

// Linear Search Algo for object data

function lSearchObjects(objects,n,comparatorfn){
    let index=0;
    for(const item of objects){   //1
        if(typeof n ==='object' && n!=null &&comparatorfn(n,item)){
            return {item,index};
        }
        else{ return false;}
        index++; 
    }

}
const Objects=[
    { name:'karan', age:26},
    { name: 'nish', age:30}, 
];

console.log(lSearchObjects(Objects,{name:'karan', age:26},function (n,item){
    return n.name=item.name; 
}));

//Best case: => O(1)
//Avg Case: => O(n)
//Worst Case: =>O(n)
