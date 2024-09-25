// way 1
function repeatChar(str) {
  let repeated = "";
  for (let i = 0; i < str.length; i++) {
    repeated += str[i].repeat(2);
  }
  return repeated;
}

console.log(repeatChar("Ahmed")); //AAhhmmeedd

//way 2
function repeatChar1(a) {
  return a
    .split("")
    .map((index) => index.repeat(2))
    .join("");
}

console.log(repeatChar1("Ahmed")); //AAhhmmeedd
