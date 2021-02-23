const { hello } = require('../src/index.js');

describe('The index page has the following functions: ', () => {
  it('The hello function should print the phrase hello world', () => {
    expect(hello()).toBe(true);
  })
})