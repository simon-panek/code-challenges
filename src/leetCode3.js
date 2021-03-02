'use strict';

function connectionTest2 () {
  return true;
}

// LeetCode #3
// Given a string s, find the length of the longest substring without repeating characters.
// s consists of English letters, digits, symbols and spaces.

const longestSubstring = (s) => {
  if(s === '') return 0;
  let longestSubstring = '';
  let tempSubstring = '';

  for (let i=0; i<s.length; i++){
    if(tempSubstring.includes(s[i])){
      let trim = tempSubstring.indexOf(s[i]);
      tempSubstring = tempSubstring.slice(trim +1);
      
    }
    tempSubstring = tempSubstring + s[i];
    if(tempSubstring.length > longestSubstring.length) {
      longestSubstring = tempSubstring;
    }
  }
  return longestSubstring.length;
};

// Success - Accepted 03/02/2021
// Runtime: 112 ms, faster than 77.23% of JavaScript online submissions for Longest Substring Without Repeating Characters
// Memory Usage: 44.6 MB, less than 50.02% of JavaScript online submissions for Longest Substring Without Repeating Characters

module.exports = { connectionTest2, longestSubstring };