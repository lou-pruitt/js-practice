// Define a function named do_math
// It takes 3 inputs (parameters): two numbers and an operator string
function do_math(num1, num2, operator) {
  // If the operator is '+', add num1 and num2
  if (operator === "+") {
    return num1 + num2; // return sends the answer back and immediately exits the function
  }

  // Otherwise, if the operator is '-', subtract num2 from num1
  else if (operator === "-") {
    return num1 - num2; // returns the subtraction result
  }

  // Otherwise, if the operator is '*', 'x', or 'X', multiply num1 and num2
  else if (operator === "*" || operator === "x" || operator === "X") {
    return num1 * num2; // returns the multiplication result
  }

  // Otherwise, if the operator is '/', divide num1 by num2
  else if (operator === "/") {
    return num1 / num2; // returns the division result
  }

  // If none of the valid operators matched, run this last fallback
  else {
    return "Invalid operator"; // returns a message instead of a number for bad input
  }
}

// Example call: pass in 5, 2, and '*'
do_math(5, 2, "*"); // returns 10 because '*' triggers multiplication (5 * 2)
