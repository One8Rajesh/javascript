
const symb=Symbol("key1")
const info={
    name:"Rajesh",
    age:18,
    email:"rajeshbro188@gmail.com",
    location:"Nepal",
    isloggedin:false,
    lastlogin:["monday","friday"],
    [symb]:"hello" 
    //  this is a symbol if we write this way then only it undersand it is symbol

}
// printing the methods
console.log(info.email);
// better way to print the method because email is itself is string so printing any string we can use this type of methods
console.log(info["email"]);
console.log(info["name"]);

// this is the way of printing symbol
console.log(info[symb]);
console.log(typeof [symb]);

// when we want to change the value we can just use = to overlay the things
info.email="rajeshhero123@gmail.com"
console.log(info["email"]);

// when we write free of the object then it will freeze the value when any changes value made after the freeze value won't overlays
Object.freeze(info)

// this value won't gonna changes because it is already freeze the object before overlaying the email methods
info.email="rajeshbro188@gmail.com"

console.log(info);

