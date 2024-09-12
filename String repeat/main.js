function repeatStr(word,noOfRepeat){
    let str = ''
    for (let index = 0 ; index < noOfRepeat ; index++){
        str+=word
    }
    return str
}
console.log(repeatStr("I",10)); //IIIIIIIIII
