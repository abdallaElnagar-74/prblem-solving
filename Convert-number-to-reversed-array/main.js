function digitize(n) {
  return n
    .toString()
    .split("")
    .map((index) => Number(index))
    .toReversed();
}

console.log(digitize(548971));
