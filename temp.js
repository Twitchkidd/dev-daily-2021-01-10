const checkDromeStatus = checkMe => {
	if (checkMe.length % 2 === 1) {
		const midIndex = Math.floor(checkMe.length / 2);
		const first = checkMe.slice(0, midIndex + 1);
		const second = checkMe.slice(midIndex);
		return first === [...second].reverse().join('');
	} else {
		const first = checkMe.slice(0, checkMe.length / 2);
		const second = checkMe.slice(checkMe.length / 2);
		return first === [...second].reverse().join('');
	}
};

console.log(checkDromeStatus('edcbaabcde'));
