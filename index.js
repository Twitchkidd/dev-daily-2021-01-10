// * dev@devdaily
// * $ ~ Given a string s, you can convert it to
// * a palindrome by adding characters in front of it. Find and return
// * the shortest palindrome you can find by performing this transformation.

// * Input: s = "aacecaaa" Output: "aaacecaaa"

function palindromate(str) {
	if (str.length < 2) return str;
	const checkDromeStatus = checkMe => {
		const midIndex =
			checkMe.length % 2 === 1
				? Math.floor(checkMe.length / 2)
				: checkMe.length / 2;
		let palindrome = true;
		for (let i = 0; i < midIndex; i++) {
			if (checkMe[i] !== checkMe[checkMe.length - (i + 1)]) {
				palindrome = false;
			}
		}
		return palindrome;
	};
	let newStr = str;
	for (let i = 0; i <= str.length && !checkDromeStatus(newStr); i++) {
		newStr = [newStr[i + i], ...newStr].join('');
	}
	if (checkDromeStatus(newStr)) return newStr;
	console.error('Uh-oh! Should be able to do this in str.length tries!');
}

// https://stackoverflow.com/questions/1349404/generate-random-string-characters-in-javascript
function makeid(length) {
	var result = '';
	var characters =
		'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
	var charactersLength = characters.length;
	for (var i = 0; i < length; i++) {
		result += characters.charAt(Math.floor(Math.random() * charactersLength));
	}
	return result;
}

console.time('palindromate');
console.log(palindromate(makeid(10000)));
console.timeEnd('palindromate');

module.exports = palindromate;
