//way 1 
function sumOfArrayExceptHighAndLowNumber1(arr) {
if(arr != null){
    arr.sort();
    arr.pop();
    arr.shift();
    return arr.reduce((acc, curr) => acc + curr, 0);
}
else {
    return 0
}
}
console.log('Way 1 => ',sumOfArrayExceptHighAndLowNumber1([2, 1, 4, 3, 5])); //first way

//way 2
function sumOfArrayExceptHighAndLowNumber2(arr) {
  let high = arr[arr.length - 1];
  let low = arr[0];
  let sum = 0;
if (arr != null){
    for (let index = 0; index < arr.length; index++) {
        if (arr[index] > high) {
          high = arr[index];
        } else if (arr[index] < low) {
          low = arr[index];
        }
      }
    
      for (let index = 0; index < arr.length; index++) {
        if (arr[index] != high && arr[index] != low) {
          sum += arr[index];
        }
      }
 return sum   
}
else {
    return 0
}
}
console.log('Way 2 => ',sumOfArrayExceptHighAndLowNumber2([2, 1, 4, 3, 5])); //second way

//way 3 

function sumOfArrayExceptHighAndLowNumber3(arr){
return arr.sort().slice(1,-1).reduce((accu,current)=>accu+current,0)
}
console.log('Way 3 => ',sumOfArrayExceptHighAndLowNumber3([2, 1, 4, 3, 5])); //third way
