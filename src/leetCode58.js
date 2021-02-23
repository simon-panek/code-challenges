'use strict';

function connectionTest () {
  return true;
}

// LeetCode #58
//Given a string s consists of some words separated by spaces, return the length of the last word in the string. If the last word does not exist, return 0.
//A word is a maximal substring consisting of non-space characters only.
//s consists of only English letters and spaces ' '

const lengthOfLastWord = (s) => {
  let length = 0;
  if (s === '') return length; //error check for empty string
  let arrayOfStrings = s.split(' '); //split into array of strings
  let i = 1;
  while(arrayOfStrings[arrayOfStrings.length-i].length === 0) { //steps back from end of array until a non-space string is found 
    i++;
    if(i === arrayOfStrings.length + 1) return length = 0; //returns 0 if the array only contains spaces
  } 
  length = arrayOfStrings[arrayOfStrings.length-i].length;  //sets length of last word
  return length; 
};

// Success - Accepted 02/23/2021 13:08
// Runtime: 76 ms, faster than 79.20% of JavaScript online submissions for Length of Last Word.
// Memory Usage: 39 MB, less than 9.66% of JavaScript online submissions for Length of Last Word.

module.exports = { connectionTest, lengthOfLastWord };