// Constructing Hash Table and solving collisions with chaining
// It can save multiple value per key hash using nested array
class HashTable{
    constructor(){
        this.size= 16;
        // by using map we are assigning nested arrays in bucket array
        this.buckets = Array(16)
        .fill(null)
        .map(() => []);
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
        const keyHash = this.hash(key);
        const bucketArray = this.buckets[keyHash];
        const storedElement = bucketArray.find((element) => {
          return element.key === key;
        });
// if the key is found then we are overriding the value of stored element 
if (storedElement) {
    storedElement.val = value;
  } else {
            // we are storing the value as an object which has its own key under the hash index value 
            bucketArray.push({ key: key, val: value });
        }
      }
    
// this function gets the value from bucket array from a specific hashkey index.
    get(key){
        const keyHash = this.hash(key);
    const bucketArray = this.buckets[keyHash];
        // it will match the key with the nested object key value with the given key
        const storedElement = bucketArray.find(element => {
            return element.key === key;
          });
          return storedElement;
        }
      
    // display key and values
    displayInfo(){
        for (const key in this.buckets) {
          if (this.buckets[key] !== null) {
            console.log(key, this.buckets[key]);
          }
        }
      }
    }


const table1 = new HashTable();
for (const char of 'JavaScript Hash Table') {
  table1.set(char, char);
}

for (const char of 'It is exciting') {
  table1.set(char, char);
}

for (const char of 'Data Mapping') {
  table1.set(char, char);
}

console.log(table1.displayInfo());

