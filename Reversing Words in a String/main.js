// way 1
function reverseWord(word) {
  return word.split(" ").toReversed().join(" ");
}
console.log(reverseWord("Ahmed Mohamed"));

// way 2
function reverseWord1(word) {
  let z = word.split(" ");
  let x = new Array();
  z.forEach((element) => {
    x.unshift(element);
  });
  return x.join(" ");
}
console.log(reverseWord1("Ahmed Mohamed"));
