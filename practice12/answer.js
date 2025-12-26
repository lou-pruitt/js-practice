function randomizeList(inputArray) {
  let randomNum;
  let outputArray = [];
  let i;
  let tempItem;
  for (i = 0; i < inputArray.length; i++) {
    randomNum = Math.floor(Math.random() * (i + 1));
    tempItem = inputArray[i];
    inputArray[i] = inputArray[randomNum];
    inputArray[randomNum] = tempItem;
  }
  console.log(inputArray);
}
