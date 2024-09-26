// way 1
function squareOrSquareRoot(arr) {
  let newArray = [];
  for (let index = 0; index < arr.length; index++) {
    if (Number.isInteger(Math.sqrt(arr[index]))) {
      newArray.push(Math.sqrt(arr[index]));
    } else {
      newArray.push(Math.pow(arr[index], 2));
    }
  }
  return newArray;
}

console.log(squareOrSquareRoot([1, 2, 3, 4, 5, 6, 9])); //[1, 4, 9, 2, 25, 36, 3]

// way 2
function squareOrSquareRoot1(arr) {
  return arr.map((index) =>
    Number.isInteger(Math.sqrt(index)) ? Math.sqrt(index) : Math.pow(index, 2)
  );
}
console.log(squareOrSquareRoot1([1, 2, 3, 4, 5, 6, 9])); //[1, 4, 9, 2, 25, 36, 3]
