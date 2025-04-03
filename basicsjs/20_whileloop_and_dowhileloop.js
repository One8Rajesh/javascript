// while loop:
let i=0
while (i<=10) {
    console.log(`value is ${i}`);
    i=i+2
}

const myarray=["superman","batman","flash"]
let j=0
while (j<myarray.length) {
    console.log(myarray[j]);
    j++
    
}

// Do while loop:
// In do while loop at first program execute and then condition is checked so value 11 prints but when condition checked
//  it is less or equal to print so it Doesn't enter in loop
let score=11
do {
    console.log(`score is ${score}`)
    score++
} while (score<=10);