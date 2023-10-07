const Stack = require("../lib/stack");

const match = (expression) => {
	// Initialize a new empty stack
	const stack = new Stack();
	// Iterate through each character in the expression
	for (let i = 0; i < expression.length; i++) {
		// If the current character is '(', push it onto the stack
		if (expression[i] === "(") {
			stack.push(expression[i]);
		}
		// Else if the current character is ')'...
		else if (expression[i] === ")") {
			// If the stack isn't empty, pop one item off the stack
			if (stack.top) {
				stack.pop();
			}
			// If the stack is empty, return false
			else {
				return false;
			}
		}
	}
	// If the stack is empty, return true
	if (!stack.top) {
		return true;
	}
	// Else, return false
	else {
		return false;
	}
};

module.exports = match;
