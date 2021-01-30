const word = 'Logicalaabbb mind';

function findFirstRep(word){
const table={};
for(const char of word ){
    if(table[char]){
        return char;
    }
    // assigning key 1 to every character 
    table[char]=1;
}
}
console.log(findFirstRep(word));