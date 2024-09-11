let a = [-5,-1,1,2];
let sum = 0;
function sumOfPositiveNums(n) {
  for (let i = 0; i < n.length; i++) {
    if (n[i] >= 0) {
        sum += n[i];
    } 
    else {
      continue;
    }
  }
  return sum;
}

function sumOfPositiveNumsWithFilter(){
    let filtered = a.filter(x=>x>0)
   return filtered.reduce((acc,curr)=>acc + curr , 0)
     
}
console.log(sumOfPositiveNumsWithFilter()); //with filter function

console.log(sumOfPositiveNums(a));  //with for Loop 
