//merge sort program  

function sort(arr) {
    console.log('FUNCTION START');
    console.log(arr);
    // checking array list has less then two elements
    if (arr.length < 2) {
      return arr;
    }
    // sorting logic for two elements
    if (arr.length === 2) { 
      console.log('EXACTLY 2 ITEMS');
      console.log(arr[0] > arr[1] ? [arr[1], arr[0]] : arr);
      return arr[0] > arr[1] ? [arr[1], arr[0]] : arr;
    }
    const middle = Math.floor(arr.length / 2); 
    const leftArray = arr.slice(0, middle);
    const rightArray = arr.slice(middle);
  
    const leftSortedArray = sort(leftArray);
    const rightSortedArray = sort(rightArray);
  
    console.log('AFTER RECURSIVE STEP');
    // Recursive Step Time Complexity: O(n^logb(a)) => O(n^log2(2)) => O(n^1) => O(n)
    console.log("left sorted array:"+leftSortedArray);
    console.log("right sorted array"+rightSortedArray);
  
    const mergedArr = [];
    let leftArrIndex = 0;
    let rightArrIndex = 0;
    while ( // liner time complexity 
      leftArrIndex < leftSortedArray.length ||
      rightArrIndex < rightSortedArray.length
    ) {
      if (
        leftArrIndex >= leftSortedArray.length ||
        leftSortedArray[leftArrIndex] > rightSortedArray[rightArrIndex]
      ) {
        mergedArr.push(rightSortedArray[rightArrIndex]);
        console.log(mergedArr);
        rightArrIndex++;
      } else {
        mergedArr.push(leftSortedArray[leftArrIndex]);
        console.log(mergedArr);
        leftArrIndex++;
      }
    }
  
    console.log('AFTER MERGE');
    console.log(mergedArr);
  
    return mergedArr;
  }
  // a is 2 "two recurcise calls" and b is 2 as we splitting the prob into two

  // Recursive Step Time Complexity: O(n^logb(a)) => O(n^log2(2)) => O(n^1) => O(n)
  // Time Complexity outside of the Recursion: O(n)
  // Algorithm Time Complexity: O(n^logb(a) * log n) => O(n * log n)
  
  // const sortedArray = sort([-10, 33, 5, 10, 9, 3, -19, -99, 100]);
  // Best-Avg-Worst => O(n*log n)
  const sortedArray = sort([-10, 33, 100, 5]);
  console.log(sortedArray);

  