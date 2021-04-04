const { connectionTest, lengthOfLastWord } = require('../src/leetCode58.js');
const { connectionTest2, longestSubstring } = require('../src/leetCode3.js');
const { connectionTest3, maxSatisfaction } = require('../src/leetCode1402.js');
const { connectionTest4, maxScoreWords } = require('../src/leetCode1255.js');


// LeetCode #3 ---------------------------------------------------------------

describe('The leetCode3 page has the following functions: ', () => {
  it('The connectionTest from leetCode3 should return true', () => {
    expect(connectionTest2()).toBe(true);
  })

  it('(LC#3) The longestSubstring function should return 0 if a string with no length is provided', ()=> {
    expect(longestSubstring('')).toEqual(0);
  })
  it('(LC#3) The longestSubstring function should return the longest non-repeating substring given a string', ()=> {
    expect(longestSubstring('The dog ran fast')).toEqual(7);
    expect(longestSubstring('one two three')).toEqual(7);
    expect(longestSubstring('one two three four five six seven eight nine ten')).toEqual(8);
    expect(longestSubstring('it was a big gray elephant')).toEqual(7);
    expect(longestSubstring('a')).toEqual(1);
    expect(longestSubstring(' ab ')).toEqual(3);
    expect(longestSubstring('ab  ')).toEqual(3);
    expect(longestSubstring('abcabcbb')).toEqual(3);
    expect(longestSubstring('   ')).toEqual(1);
    expect(longestSubstring('thisisareallylongsingleword')).toEqual(10);
    expect(longestSubstring(' !@#$%^&*()abcdefghijklmnopqrstuvwxyz1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ ')).toEqual(73);
  })
})

// End LC#3

// LeetCode #58 -------------------------------------------------------------

describe('The leetCode58 page has the following functions: ', () => {
  it('The connectionTest from leetCode58 should return true', () => {
    expect(connectionTest()).toBe(true);
  })

  it('(LC#58) The lengthOfLastWord function should return 0 if a string with no length or no alpha characters is provided', ()=> {
    expect(lengthOfLastWord('')).toEqual(0);
    expect(lengthOfLastWord(' ')).toEqual(0);
  })
  it('(LC#58) The lengthOfLastWord function should return the length of the final word in a string', ()=> {
    expect(lengthOfLastWord('The dog ran fast')).toEqual(4);
    expect(lengthOfLastWord('one two three')).toEqual(5);
    expect(lengthOfLastWord('one two three four five six seven eight nine ten')).toEqual(3);
    expect(lengthOfLastWord('it was a big gray elephant')).toEqual(8);
    expect(lengthOfLastWord('a')).toEqual(1);
    expect(lengthOfLastWord(' a b ')).toEqual(1);
    expect(lengthOfLastWord(' a b  ')).toEqual(1);
    expect(lengthOfLastWord('   ')).toEqual(0);
    expect(lengthOfLastWord('thisisareallylongsingleword')).toEqual(27);
    expect(lengthOfLastWord('     thisisareallylongsingleword')).toEqual(27);
  })
})

// End LC#58 

// LeetCode #1255 -------------------------------------------------------------

describe('The leetCode1255 page has the following functions: ', () => {
  it('The connectionTest from leetCode1255 should return true', () => {
    expect(connectionTest()).toBe(true);
  })

  // it('The max word score should return the highest possible value ', () => {
  //   let words = ["dog","cat","dad","good"];
  //   let letters = ["a","a","c","d","d","d","g","o","o"];
  //   let score = [1,0,9,5,0,0,3,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0];
  //   expect(maxScoreWords(words, letters, score)).toEqual(23);
  // })

  // it('The max word score should return the highest possible value ', () => {
  //   let words = ["xxxz","ax","bx","cx"];
  //   let letters = ["z","a","b","c","x","x","x"];
  //   let score = [4,4,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,5,0,10];
  //   expect(maxScoreWords(words, letters, score)).toEqual(27);
  // })
})

// End LC#1255

// LeetCode #1402 -------------------------------------------------------------

describe('The leetCode1402 page has the following functions: ', () => {
  it('The connectionTest3 from leetCode1402 should return true', () => {
    expect(connectionTest3()).toBe(true);
  })

  it('The dish reducer should return the maximum sum of Like-time that a given input will allow ', ()=> {
    let input = [-1, -8, 0, 5, -9];
    expect(maxSatisfaction(input)).toEqual(14);
  })

  it('The dish reducer should return the maximum sum of Like-time that a given input will allow ', ()=> {
    let input = [4, 3, 2];
    expect(maxSatisfaction(input)).toEqual(20);
  })

  it('The dish reducer should return the maximum sum of Like-time that a given input will allow ', ()=> {
    let input = [-1, -4, -5];
    expect(maxSatisfaction(input)).toEqual(0);
  })

  it('The dish reducer should return the maximum sum of Like-time that a given input will allow ', ()=> {
    let input = [-2,5,-1,0,3,-3];
    expect(maxSatisfaction(input)).toEqual(35);
  })
  
})

// End LC#1402
