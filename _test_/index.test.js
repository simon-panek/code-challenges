const { connectionTest, lengthOfLastWord } = require('../src/leetCode58.js');

describe('The index page has the following functions: ', () => {
  it('The connectionTest should return true', () => {
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