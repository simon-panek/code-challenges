'use strict';

function connectionTest4 () {
  return true;
}

// LeetCode #1255
// Given a list of words, list of  single letters (might be repeating) and score of every character.
// Return the maximum score of any valid set of words formed by using the given letters (words[i] cannot be used two or more times).
// It is not necessary to use all characters in letters and each letter can only be used once. Score of letters 'a', 'b', 'c', ... ,'z' is given by score[0], score[1], ... , score[25] respectively.

const maxScoreWords = (words, letters, score) => {
  let badWords = [];
  words.forEach(word => { //loop through words
    for(let i = 0; i<word.length; i++){ //loop through characters in each word
      if(letters.includes(word[i])){ //check if each character is available in the letters array
        continue; //if available, continue
      } else {
        return badWords.push(word); //if not, store the word as unbuildable
      }
    }
  })

  if(badWords === words){ //if no words are buildable, return 0
    console.log('No viable words');
    return 0;
  }

  let alpha = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  let scoreGuideObj = {};

  for(let i=0; i<26; i++){
    let key = alpha[i];
    let value = score[i];
    scoreGuideObj = {... scoreGuideObj, [key]: value};
  }

  console.log({scoreGuideObj});

  //score words that are possible
let scoredWords = [];
  words.forEach(word => {
    if(!badWords.includes(word)){
      let wordValue = 0;
      //sum character values for the word (use hashmap here)
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