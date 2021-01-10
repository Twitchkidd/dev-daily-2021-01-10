# Dev Daily 2021-01-10

#### slice() compare:

```javascript
const checkDromeStatus = checkMe => {
	let first, second;
	if (checkMe.length % 2 === 1) {
		const midIndex = Math.floor(checkMe.length / 2);
		first = checkMe.slice(0, midIndex + 1);
		second = checkMe.slice(midIndex);
	} else {
		first = checkMe.slice(0, checkMe.length / 2);
		second = checkMe.slice(checkMe.length / 2);
	}
	return first === [...second].reverse().join('');
};
```

#### character comparison:

```javascript
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
```
