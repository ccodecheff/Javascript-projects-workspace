// program to create stair pattern 
//     *
//    **
//   ***
//  ****    

let n =6;
let i=0;
let j=n;
while(i<n && j>0 ){ 
   console.log(" ".repeat(j-1)+"*".repeat(i)+"\n");
  // console.log("*".repeat(i)+"\n");
  i++;
  j--;
}
 
