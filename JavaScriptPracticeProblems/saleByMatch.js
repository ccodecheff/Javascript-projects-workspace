
function saleByMatch(ar){
let n = ar.length;
    var res = 0;
    console.log(ar.sort());
    for(let i=0; i<n;i++){
        if(ar[i] == ar[i+1]){
            console.log("Matched element:"+ar[i] +"at index: "+i+"with element"+" "+ar[i+1]+"at index:"+(i+1));
            i++;
            res++;
           }
    }
return res;
 }


let arr= [1,1,3,1,2,1,3,3,3,3];
console.log(saleByMatch(arr));