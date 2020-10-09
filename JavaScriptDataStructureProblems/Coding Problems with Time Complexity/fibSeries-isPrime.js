    // Calculating the sum of array 

    function sum(n){
      let sum=0;
      for(key in n){
        sum+=n[key];
      }  
    return sum;
    }

    let list =[1,2,3,4];
    //console.log(sum(list));

    function fib(n){
        const arr = [0, 1]; // 1 
        for (let i = 2; i <=n ; i++){ //1 
        arr.push(arr[i - 2] + arr[i -1])  // n-1
        }
      //  console.log(arr); //1 
    return arr;
    }
    //console.log(fib(10));
    // time complexity = 1+1+1+n-1
    // 3+n-1
    // 3+1*(n-1)=  n-1= n BigO= n
// Fib by recursion 

    let counter=0;
    function fibByRec(n){
       counter++;
       if(n===0 ||n===1){
          return 1;
       }
      return (fibByRec(n-1)+fibByRec(n-2));
    }
    console.log("fib by recursion value"+" "+fibByRec(4));
// Testing fib counter by recursive function
    fibByRec(5);
    console.log(counter);
    count=0;

    fibByRec(6);
    console.log(counter);
    count=0;

    fibByRec(7);
    console.log(counter);
    count=0;

    fibByRec(8);
    console.log(count);
    count=0;
// It has excecution then O(n) it grows in exponention way O(2^n)
//T=> O(2^n) it is far slower then O(n)=> O(n*n)
    

// checking if a given number is prime or not by using Math.sqrt function
     function isPrime(n){
        for(let i=2;i<Math.sqrt(n);i++){ 
   // i<n is also correct but it will increase the complexity by O(n)
            if(n % i===0 ) {return false;}   
        }
        return true;
     }   
     console.log(isPrime(4));
     console.log(isPrime(6));
     console.log(isPrime(11));
     // best case n= 1 or 2 => O(1)
     //worst case n=n-2 => O(n) 

     function minNum(n){
        return Math.min(...n); 
     }
     const n =[1,9,2,4,1];
     //console.log(minNum(n));

     // star pattern problem
     for(var i=1; i<=4; i++){
        console.log("*".repeat(i));
     }