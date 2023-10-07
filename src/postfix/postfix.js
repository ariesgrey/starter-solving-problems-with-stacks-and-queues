const Stack = require("../lib/stack");

// Assign precedence to operators
const precedence = {
	"+": 0,
	"-": 0,
	"*": 1,
	"/": 1,
};

const postfix = (expression) => {
	// Declare a variable 'stack' and initialize it to a new stack
	const stack = new Stack();
	// Declare a variable 'result' and initialize it to an empty array
	const result = [];
	// Remove spaces from expression
	expression = expression.replace(/\s/g, "");

	// Iterate through each character in the expression...
	expression.split("").forEach((char) => {
		// If the current character is '(', push it onto the stack
		if (char === "(") {
			stack.push(char);
		}
		// If the current character is ')'...
		else if (char === ")") {
			// Pop characters off 'stack' and add each character to 'result' until you find a '('
			let popped = stack.pop();
			while (popped !== "(") {
				result.push(popped);
				popped = stack.pop();
			}
		}
		// If the current character is an operator...
		else if ("+-*/".includes(char)) {
			// If the stack is empty, or the top of the stack is '(', or the current operator has higher precedence than the operator on the top of the stack...
			if (
				!stack.top ||
				stack.top.value === "(" ||
				precedence[char] > precedence[stack.top.value]
			) {
				// Push the current operator onto the stack
				stack.push(char);
			}
			// Otherwise, start popping operators off the stack while the stack is not empty and the popped operator has higher or equal precedence to the current operator
			else {
				while (stack.top && precedence[stack.top.value] >= precedence[char]) {
					// Add each popped operator to the result
					result.push(stack.pop());
				}
				// Push the current operator onto the stack
				stack.push(char);
			}
		}
		// If the current character is an operand, add it to the result
		else {
			result.push(char);
		}
	});
	// Pop any remaining operators from the stack and add them to the result
	while (stack.top) {
		result.push(stack.pop());
	}
	// Return the result as a string
	return result.join(" ");
};

module.exports = postfix;
