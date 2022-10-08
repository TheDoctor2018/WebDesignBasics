//import the function to test
const addNUM = require('./Adding') 

//test
test('returns the number plus itself', () => {
    expect(addNUM(2)).toBe(4);
})