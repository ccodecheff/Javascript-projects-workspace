// This program helps in solving hash table collision with open addressing technique
class HashTable {
    constructor() {

      this.size = 100;
      this.buckets = Array(100).fill(null);
    }
  
    hash(key) {
      let hash = 0;
      for (const char of key) {
        hash += char.charCodeAt(0);
      }
      return hash % this.size;
    }
  
    set(key, value) { 
      let keyHash = this.hash(key);
      // cheching if bucket key is null or it matches with the given key
      // if the key is found then it will override the existing key value
      if (this.buckets[keyHash] === null || this.buckets[keyHash].key === key) {
        // assigning the value
        this.buckets[keyHash] = { key: key, val: value };
      } else {
          // this will find iterate till it finds the empty key/ null value 
        while (this.buckets[keyHash] !== null) {
          keyHash++;
        }
        // assigning the key to a empty spot
        this.buckets[keyHash] = { key: key, val: value };
      }
    }
  
    get(key) {
      const keyHash = this.hash(key);
      // iterating till the length of the bucket
      // it will iterate all the nested key value and indexes
      for (let i = keyHash; i < this.buckets.length; i++) {
      // if the key is not found then it will continue
        if (!this.buckets[i]) {
          continue;
        }
        // if the nested key is found then it will return the key value
        if (this.buckets[i].key === key) {
          return this.buckets[i].val;
        }
      }
      // if no key is found it will return undefined 
      return undefined;
    }
  
    showInfo() {
      for (const key in this.buckets) {
        if (this.buckets[key] !== null) {
          console.log(key, this.buckets[key]);
        }
      }
    }
  }
  
  const table1 = new HashTable();
  for (const char of 'academind') {
    table1.set(char, char);
  }
  
  for (const char of 'hello') {
    table1.set(char, char);
  }
  
  for (const char of 'does this work') {
    table1.set(char, char);
  }
  
  console.log(table1.showInfo());
  