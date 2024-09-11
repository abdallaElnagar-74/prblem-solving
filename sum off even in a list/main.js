
let a = [];
let sum = 0;
function sumOfEvenNums(n){
  
    for (let i = 0 ; i <n.length ; i++){
            if (n[i]%2 == 0){
                if(n[i]>=0){
                    sum += n[i]
                }
                else{
                    continue
                }
            }
            else{
                sum = 0
                continue;
            }
        }
        return sum
}

console.log(sumOfEvenNums(a));
