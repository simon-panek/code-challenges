'use strict';

function connectionTest2 () {
  return true;
}

// LeetCode #3
// Given a string s, find the length of the longest substring without repeating characters.
// s consists of English letters, digits, symbols and spaces.

const longestSubstring = (s) => {
  if(s === '') return 0; //error check for empty string
  let longestSubstring = '';
  let tempSubstring = '';

  for (let i=0; i<s.length; i++){ //loop through s
    if(tempSubstring.includes(s[i])){ //check for character duplicates in the temp string
      let trim = tempSubstring.indexOf(s[i]); //if duplicate is found, find index position
      tempSubstring = tempSubstring.slice(trim +1); //remove duplicate and preceding characters
      
    }
    tempSubstring = tempSubstring + s[i]; //concat updated temp string
    if(tempSubstring.length > longestSubstring.length) { //if temp is longer than longestSubstring, update longestSubstring
      longestSubstring = tempSubstring;
    }
  }
  return longestSubstring.length; //after going though the full length of s, return the length of the longestSubstring
};

// Success - Accepted 03/02/2021
// Runtime: 112 ms, faster than 77.23% of JavaScript online submissions for Longest Substring Without Repeating Characters
// Memory Usage: 44.6 MB, less than 50.02% of JavaScript online submissions for Longest Substring Without Repeating Characters

module.exports = { connectionTest2, longestSubstring };