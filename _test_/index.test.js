const { connectionTest, lengthOfLastWord } = require('../src/leetCode58.js');
const { connectionTest2, longestSubstring } = require('../src/leetCode3.js');

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

describe('The leetCode3 page has the following functions: ', () => {
  it('The connectionTest from leetCode3 should return true', () => {
    expect(connectionTest2()).toBe(true);
  })

  it('(LC#3) The longestSubstring function should return 0 if a string with no length is provided', ()=> {
    expect(longestSubstring('')).toEqual(0);
  })
  it('(LC#3) The longestSubstring function should return the longest non-repeating substring given a string', ()=> {
    expect(longestSubstring('The dog ran fast')).toEqual('The dog');
    expect(longestSubstring('one two three')).toEqual('wo thre');
    expect(longestSubstring('one two three four five six seven eight nine ten')).toEqual('our five');
    expect(longestSubstring('it was a big gray elephant')).toEqual('gray el');
    expect(longestSubstring('a')).toEqual('a');
    expect(longestSubstring(' ab ')).toEqual(' ab');
    expect(longestSubstring('ab  ')).toEqual('ab ');
    expect(longestSubstring('   ')).toEqual(' ');
    expect(longestSubstring('thisisareallylongsingleword')).toEqual('singleword');
    expect(longestSubstring(' !@#$%^&*()abcdefghijklmnopqrstuvwxyz1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ ')).toEqual(' !@#$%^&*()abcdefghijklmnopqrstuvwxyz1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ');
  })
})