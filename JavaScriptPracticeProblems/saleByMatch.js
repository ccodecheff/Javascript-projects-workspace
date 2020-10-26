
function saleByMatch(arr){
 let pair=0;
 console.log("original array:"+arr);
 for(let i=0;i<=arr.length;i++){
console.log("outer loop running");
console.log("i:"+arr[i]);
    for( let j=i+1;j<arr.length;j++){
        if(arr[i]==arr[j]){
            pair++;  
            console.log("count:"+pair);
            console.log("running")
            console.log(" outer removed at index:"+i+" "+arr.splice(i,1));
            console.log("inner removed at index:"+j+" "+arr.splice(j,1));
            console.log(arr);
           
        } 
    }
    
}
        
  return pair;
 }


let arr= [1,1,3,1,2,1,3,3,3,3];
console.log(saleByMatch(arr));