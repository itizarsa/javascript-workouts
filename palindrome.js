const palindrome = (input) => {
	let modifiedInput;
	if (typeof input == "number") {
		modifiedInput = b.toString();
	} else {
		let reg = /[^A-Za-z0–9]/g;
		modifiedInput = input.toLowerCase().replace(reg, "");
	}

	for (i = 0; i < modifiedInput.length / 2; i++) {
		if (modifiedInput[i] != modifiedInput[modifiedInput.length - (i + 1)]) {
			return false;
		}
	}
	return true;
};

console.log(palindrome("A man, a plan, a canal. Panama"));
