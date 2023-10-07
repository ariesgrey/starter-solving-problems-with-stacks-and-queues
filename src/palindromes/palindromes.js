const Stack = require("../lib/stack");

const isPalindrome = (sentence) => {
	// Remove all spaces and punctuation from the sentence and make all characters lowercase
	sentence = sentence.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
	// Declare variable 'middle' and initialize it to half the length of the sentence, rounding down for odd-length strings
	const middle = Math.floor(sentence.length / 2);
	// Initialize a new stack
	const stack = new Stack();
	// Iterate through the sentence, from the first character up to 'middle'
	let i = 0;
	while (i < middle) {
		// Push each character onto the stack
		stack.push(sentence[i]);
		i++;
	}

	// If the sentence is an odd length, skip the middle character
	if (sentence.length % 2 !== 0) i++;

	// Iterate through the rest of the sentence
	while (i < sentence.length) {
		// Pop a character from the stack
		const popped = stack.pop();
		// If the popped character doesn't match the current character of the sentence, return false
		if (popped !== sentence[i]) {
			return false;
		}
		i++;
	}

	// When the loop is done, return true
	return true;
};

module.exports = isPalindrome;
