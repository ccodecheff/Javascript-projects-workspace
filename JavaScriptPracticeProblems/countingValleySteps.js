function countingValleyPath(path){
var seaLevel =0;
var valley =0;
    for(var char of path){
        if(char==='U'){
            ++seaLevel;
        }
        else{
            --seaLevel;
        }
        if(seaLevel==0 && char==='U')
        ++valley;
    }

    return valley;
}
let path ="UDDDUDUUDDUU";
console.log(countingValleyPath(path));