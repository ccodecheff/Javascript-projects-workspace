
function check(newstr){
  let movie= newstr;
//let v = ['a','e','i','o','u'];
for(var i =0; i<movie.length; i++){  
    
    if(movie[i]=='a'||movie[i]== 'e'||movie[i]=='i'||movie[i]=='o'||movie[i]=='u'){
    continue;
    }
    else{
        movie=movie.split('');
        console.log(movie);
        movie[i]='_';
        movie= movie.join('');    }
}

return movie;
}


function input(str){
 let movie= str.split('');
        for(var i =0; i<movie.length; i++){ 
    if(movie[i]=='_'){
        let input= prompt("enter new value");
        movie[i]=input;
    }
        }
      return movie.join(''); 
    }

var movie= "kabhi alvida";
console.log(movie);
let result=check(movie);
console.log(result);
let inputString= input(result);
console.log(inputString);