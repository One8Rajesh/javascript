// nulish operator: when we ask for data from database and in any case it is returning null or undefined values so to replace it
// we ask for or when null or undefined comes it takes it backup variable.
let var1
var1=6 ?? 9
let var2=null ?? 9
let var3=undefined ?? 18
console.log(var1);
console.log(var2);
console.log(var3);


// Terniary opertors:we can check the statement and print if else in statement in one line
const price=90
price>=80 ? console.log("price is greater than 80"): console.log("price is less thn 80");


