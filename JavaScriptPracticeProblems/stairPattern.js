// program to create stair pattern where last line is not preceded with space
//     *
//    **
//   ***
//  ****    

let n =6;
let i=1;
let j=n;
while(i<=n && j>=0 ){ 
   console.log("* ".repeat(j-1)+"#".repeat(i)); 
  // console.log("*".repeat(i)+"\n");
  i++;
  j--;
}
 
