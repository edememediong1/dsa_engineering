/**
 * LeetCode 49: Group Anagrams
 * https://leetcode.com/problems/group-anagrams/
 * 
 * Pattern: Hash Map
 * Difficulty: Medium
 * 
 * Time Complexity: O(n * k log k) where k is max string length
 * Space Complexity: O(n * k)
 */

function groupAnagrams(strs: string[]): string[][] {
  // TODO: Implement solution
  return [];
}

// Test cases
console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
// Expected: [["eat","tea","ate"],["tan","nat"],["bat"]]

console.log(groupAnagrams([""]));
// Expected: [[""]]

console.log(groupAnagrams(["a"]));
// Expected: [["a"]]
