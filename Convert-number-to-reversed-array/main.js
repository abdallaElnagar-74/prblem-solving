function digitize(n) {
  let a = String(n);
  return a
    .split("")
    .map((index) => Number(index))
    .toReversed();
}

console.log(digitize(548971));
