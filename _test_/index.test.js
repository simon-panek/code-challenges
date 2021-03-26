const { connectionTest, lengthOfLastWord } = require('../src/leetCode58.js');
const { connectionTest2, longestSubstring } = require('../src/leetCode3.js');
const { connectionTest3, maxSatisfaction } = require('../src/leetCode1402.js');


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

// LeetCode #1402 -------------------------------------------------------------

describe('The leetCode1402 page has the following functions: ', () => {
  it('The connectionTest3 from leetCode1402 should return true', () => {
    expect(connectionTest3()).toBe(true);
  })

  // it('The dish reducer should return the maximum sum of Like-time that a given input will allow ', ()=> {
  //   let input = [-1, -8, 0, 5, -9];
  //   expect(maxSatisfaction(input)).toEqual(14);
  // })

  // it('The dish reducer should return the maximum sum of Like-time that a given input will allow ', ()=> {
  //   let input = [4, 3, 2];
  //   expect(maxSatisfaction(input)).toEqual(20);
  // })

  // it('The dish reducer should return the maximum sum of Like-time that a given input will allow ', ()=> {
  //   let input = [-1, -4, -5];
  //   expect(maxSatisfaction(input)).toEqual(0);
  // })
  
})

// End LC#1402
