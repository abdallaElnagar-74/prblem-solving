//first way
function countSheeps(sheeps) {
  let filter = sheeps.filter((index) => index == true);
  return filter.length;
}

console.log(countSheeps([true, true, false, true, false])); // 3

// second way
function countSheeps1(sheeps) {
  let filtered = [];

  for (let index = 0; index < sheeps.length; index++) {
    if (sheeps[index] == true) {
      filtered.push(true);
    } else {
      continue;
    }
  }
  return filtered.length;
}

console.log(countSheeps1([true, true, false, true, false])); //3
