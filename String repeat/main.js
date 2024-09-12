function repeatStr(word, noOfRepeat) {
  let str = "";
  for (let index = 0; index < noOfRepeat; index++) {
    str += word;
  }
  return str;
}
console.log(repeatStr("I", 10)); //way 1 

//there is built in func call repeat we can use it

function repeatStr1(w,n){

    return w.repeat(n)
}

console.log(repeatStr("I",10)); //way 2
