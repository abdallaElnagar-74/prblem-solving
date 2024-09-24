function countPositivesSumNegatives(arr) {
  let countPositeves = 0;
  let sumNegatives = 0;
  let finalArr = [];

  for (let index = 0; index < arr.length; index++) {
    if (arr[index] > 0) {
      countPositeves++;
    } else {
      sumNegatives += arr[index];
    }
  }
  finalArr.push(countPositeves, sumNegatives);
  return finalArr;
}

console.log(countPositivesSumNegatives([-1, -2, -5, -8, -4, 1, 4, 5, 6, 3, 7])); //[6,-20]
