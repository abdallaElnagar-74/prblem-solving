// way 1
function Invert(arr) {
  return arr.map((index) => index * -1);
}

console.log(Invert([-1, 2, -3, 5, -6]));

// way 2
function Invert1(arr) {
  let invertedArray = new Array();
  arr.forEach((element) => {
    invertedArray.push(element * -1);
  });
  return invertedArray;
}

console.log(Invert1([-1, 2, -3, 5, -6]));
