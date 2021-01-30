// Constructing Hash Table without considering hash keys collisions
class HashTable{
    constructor(){
        this.size= 1000;
        this.Bucket= Array(this.size).fill(null);
    }
// this function converts the character to hash key index
    hash(key){
        let hashKey= 1;
        for(const char of key){
            hashKey+= char.charCodeAt(0);
        }
        return hashKey%this.size;
    }
// this function sets the value in bucket array at hash key index
    set(key,value){
        let hashKey= this.hash(key);
        this.Bucket[hashKey]= value;
    }
// this function gets the value from bucket array from a specific hashkey index.
    get(key){
        let hashKey = this.hash(key);
        return this.Bucket[hashKey];
    }

    // display key and values
    displayInfo(){
        for (const key in this.Bucket){
            if(this.Bucket[key]!==null){
                console.log(key, this.Bucket[key]);
            }
        }
    }
}

const table1 = new HashTable();

for(const char of "my name is karan"){
    // it will display the char with corresponding index
    table1.set(char,char);
}

for(const char of "Hello JavaScript"){
    // it will display the char with corresponding index
    table1.set(char,char);
}

table1.displayInfo();


// This program is an example implementation of hashTable
const word = 'Logical mind';

function findFirstRep(word){
const table= new HashTable();
for(const char of word ){
    if(table.get(char)){
        return char;
    }
    // assigning key 1 to every character 
    table.set(char,1);
}
}
console.log(findFirstRep(word));