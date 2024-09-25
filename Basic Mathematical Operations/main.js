//way 1
function basicOp(op, val1, val2) {
  switch (op) {
    case "+":
      return val1 + val2;
    case "-":
      return val1 - val2;
    case "*":
      return val1 * val2;
    case "/":
      return val1 / val2;
  }
}
console.log(basicOp("+", 4, 7)); //11
console.log(basicOp("-", 15, 18)); //-3
console.log(basicOp("*", 5, 5)); //25
console.log(basicOp("/", 49, 7)); //7

//way 2
function basicOp1(op, val1, val2) {
  if (op === "+") {
    return val1 + val2;
  } else if (op === "-") {
    return val1 - val2;
  } else if (op === "*") {
    return val1 * val2;
  } else if (op === "/") {
    return val1 / val2;
  }
}
console.log(basicOp1("+", 4, 7)); //11
console.log(basicOp1("-", 15, 18)); //-3
console.log(basicOp1("*", 5, 5)); //25
console.log(basicOp1("/", 49, 7)); //7

//way3
function basicOp2(op, val1, val2) {
  return eval(val1 + op + val2);
}
console.log(basicOp2("+", 4, 7)); //11
console.log(basicOp2("-", 15, 18)); //-3
console.log(basicOp2("*", 5, 5)); //25
console.log(basicOp2("/", 49, 7)); //7
