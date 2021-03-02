'use strict';

function connectionTest2 () {
  return true;
}

// LeetCode #3
//Given a string s, find the length of the longest substring without repeating characters.
//s consists of English letters, digits, symbols and spaces.

const longestSubstring = (s) => {
  if(s === '') return 0;
  let longestSubstring = '';
  let tempSubstring = '';

  for (let i=0; i<s.length; i++){
    // console.log({longestSubstring});
    // console.log({tempSubstring});
    if(tempSubstring.includes(s[i])){
      // console.log('updating temp');
      let trim = tempSubstring.indexOf(s[i]);
      // console.log({trim});
      tempSubstring = tempSubstring.slice(trim +1);
      
    }
    tempSubstring = tempSubstring + s[i];
    // console.log('2', {tempSubstring});
    if(tempSubstring.length > longestSubstring.length) {
      longestSubstring = tempSubstring;
    }
  }
  // console.log('2', {longestSubstring});
  return longestSubstring.length;
};

// Success - 
// Runtime: 
// Memory Usage: 

module.exports = { connectionTest2, longestSubstring };