// if we use curly braces in function then we have to return the value
const addtwo=(num1,num2)=>{
    return num1+num2
}

// if we don't use the curly braces in function then we can directly return without writing return
const addtwoo=(num1,num2)=> (num1+num2)

console.log(addtwo(6,5));
console.log(addtwoo(6,5));
