// first way

function findTheNeedle(arr) {
  let noOfIndex = 0;
  for (let index = 0; index < arr.length; index++) {
    if (arr[index].toLowerCase() === "needle") {
      noOfIndex = index;
      break;
    } else {
      continue;
    }
  }
  return noOfIndex;
}

console.log(
  "found the needle at position ",
  findTheNeedle(["A", "B", "Ahmed", "Needle"])
);

// second way

function findTheNeedle1(arr) {
  return arr.map((index) => index.toLowerCase()).indexOf("needle");
}

console.log(
  `found the needle at position ${Number(
    findTheNeedle1(["A", "B", "Ahmed", "Needle"])
  )}`
);
