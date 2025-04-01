function add(number1,number2){
    return number1+number2

}
result=add(5,7)
console.log(result);

function loginusername(username){
    // if(username===unefined) this is use for checking undefining values or you can write if(!username) also
    if(!username){
        console.log("please enter the username")
        return
    }
    return `${username} just logged in`
}
console.log(loginusername())
console.log(loginusername("Rajesh"))


// how to call object in function
const log={
    username:"Rajesh",
    time:"1 hrs ago"
}
// function logged(newlogin) if we pass different parameters we have to add newlogin.username and newlogin.time and at calling function we can use the real object variable name
function loggedin(log){
console.log(`${log.username} logged in ${log.time}`)
return
}

console.log(loggedin(log))

const newarray=[200,500,600]
// function pass (fornew) if we pass different parameters then also it works
function pass(newarray){
    return newarray[1]
}

console.log(pass(newarray))