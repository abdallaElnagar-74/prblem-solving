// way 1
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

// way 2

function countPositivesSumNegatives1(arr) {
  let positiveCount = arr.filter((n) => n > 0).length;
  let negativeSum = arr
    .filter((n) => n < 0)
    .reduce((prev, curr) => prev + curr, 0);

  return [positiveCount, negativeSum];
}

console.log(
  countPositivesSumNegatives1([-1, -2, -5, -8, -4, 1, 4, 5, 6, 3, 7])
); //[6,-20]
