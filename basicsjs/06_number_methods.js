const score=500
console.log(score);

// we specify the balance as a number so no any datatype it takes.it only takes number as datatypes
const balance=new Number(900)
console.log(balance)

// changes the number in string and then printing the lentgth
console.log(balance.toString().length)

// gives 00 after the . show floating number as a 00
console.log(balance.toFixed(2))

const othernum=78.586
// print the value only 3 and left shown in algorthmic power
console.log(othernum.toPrecision(3))


const num=1005885202
// change in english currency gives comma after the decimal of three first and two others
console.log(num.toLocaleString())


