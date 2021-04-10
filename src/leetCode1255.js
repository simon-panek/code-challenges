'use strict';

function connectionTest4 () {
  return true;
}

// LeetCode #1255
// Given a list of words, list of  single letters (might be repeating) and score of every character.
// Return the maximum score of any valid set of words formed by using the given letters (words[i] cannot be used two or more times).
// It is not necessary to use all characters in letters and each letter can only be used once. Score of letters 'a', 'b', 'c', ... ,'z' is given by score[0], score[1], ... , score[25] respectively.

const maxScoreWords = (words, letters, score) => {
  words.forEach(word => { //loop through words
    let badWords = [];
    for(let i = 0; i<word.length; i++){ //loop through characters in each word
      if(letters.includes(word[i])){ //check if each character is available in the letters array
        continue; //if available, continue
      } else {
        return badWords.push(word); //if not, store the word as unbuildable
      }
    }
  })

  if(badWords === words){ //if no words are buildable, return 0
    return 0;
  }

  //score words that are possible
let scoredWords = [];
  words.forEach(word => {
    if(!badWords.includes(word)){
      let wordValue = 0;
      //sum character values for the word
      scoredWords.push(wordValue);
    }
  })
};

//Constraints
// 1 <= words.length <= 14
//1 <= words[i].length <= 15
//1 <= letters.length <= 100
//letters[i].length == 1
//score.length == 26
//0 <= score[i] <= 10
//words[i], letters[i] contains only lower case English letters.

// Success - 
// Runtime: 
// Memory Usage: 

module.exports = { connectionTest4, maxScoreWords };