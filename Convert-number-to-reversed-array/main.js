// a = "5431"
// wp = a.split('')
// mp = wp.map(index=> Number(index))
// rev = mp.toReversed()
// console.log(rev);

function digitize (n){
    let a = String(n)
    return a.split('').map(index=>Number(index)).toReversed()

}

console.log(digitize(548971));
