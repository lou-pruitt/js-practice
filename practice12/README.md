## randomize array

Create a function, randomizeList(), that takes an array and ranzomizes the order, without resorting to the use of any pre-existing array methods.

#### Input:

- inputArray: an array of anything

#### Output:

- outputArray, the original array, randomly arranged

#### Example:

<pre>
var inputArray = 
[5,3,2,5,1]</pre>

output = randomizeList(inputArray);
console.log(output); //outputs

<pre>[3,1,5,5,2]</pre>

console.log(randomizeList(inputArray)); //outputs

<pre>[1,3,5,1,2,5]</pre>

#### Put your solution in answer.js

- hint: Math.random() will give you a random fractional number between 0 and 1
- hint: .pop() will allow you to take numbers off your source array as you pick them randomly
- hint: Using pop will directly affect the length of the array
