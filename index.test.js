const palindromate = require('./index');

// test('adds 1 + 2 to equal 3', () => {
//   expect(sum(1, 2)).toBe(3);
// });

test('returns shortest palindrome', () => {
	expect(palindromate('aacecaaa')).toStrictEqual('aaacecaaa');
});
