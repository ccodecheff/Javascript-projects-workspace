// leetcode example 26 - length of unque list


var removeDuplicates = function(nums) {
    if (!nums.length) {
    return 0;
  }

  let i = 0;
  for (let j = 1;j < nums.length;j++) {
    if (nums[i] !== nums[j]) {
        i++;
      nums[i] = nums[j];
    }
  }

  return i + 1;

};
console.log(removeDuplicates([1,1,2,3,3,4]));