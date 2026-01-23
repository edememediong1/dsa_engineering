/**
 * LeetCode 1: Two Sum
 * https://leetcode.com/problems/two-sum/
 * 
 * Pattern: Hash Map
 * Difficulty: Easy
 * 
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 */

function twoSum(nums: number[], target: number) {
  // TODO: Implement solution
  for (let i = 0; i < nums.length; i++ ){
    for (let j = i + 1; j < nums.length; j++){
      let sum = nums[i] + nums[j]
      if (sum == target){
          return [i, j];
      }
    }
  }
}

// Test cases
console.log(twoSum([2, 7, 11, 15], 9)); // Expected: [0, 1]
console.log(twoSum([3, 2, 4], 6));      // Expected: [1, 2]
console.log(twoSum([3, 3], 6));         // Expected: [0, 1]
