var result;
var num1;
var num2;
var message;

function doMath(num1, num2, operator) {

    switch (operator) {
        case '+':
            result = num1 + num2
            message = 'Sum of ' + num1 + ' ' + 'and ' + num2 + ' is : ' + result
            break;
        case '-':
            result = num1 - num2
            message = 'Difference of ' + num1 + ' ' + 'and ' + num2 + ' is : ' + result
            break;
        case '*':
        case 'x':
        case 'X':
            result = num1 * num2
            message = 'Product of ' + num1 + ' ' + 'and ' + num2 + ' is : ' + result
            break;
        case '/':
            result = num1 / num2
            message = 'Quotient of ' + num1 + ' ' + 'and ' + num2 + ' is : ' + result
            break;
        default:
            console.log("Invalid Entry!");

    }
}

doMath(5, 2, 'x');
console.log(message);