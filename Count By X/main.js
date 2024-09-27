// way 1 
function countByNumber(n, len) {
    let arr = new Array();
    for (let i = 1; i <= len; i ++) {
        arr.push(i*n)
    }
    return arr;
}
console.log(countByNumber(1, 10)); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(countByNumber(2,5)); // 

// way 2

function countByNumber1(n,length){

    return Array.from(Array(length+1).keys()).slice(1).map(i => i*n)
}
console.log(countByNumber1(1,10)); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(countByNumber1(2,5)); //

