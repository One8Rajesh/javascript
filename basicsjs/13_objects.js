// new object is assign here
const user={}

// uses of assigining object
user.id="rajesh123"
user.name="Rajesh"
user.age=18
user.isloggedin=false
console.log(user);
// gives the keys pair only
console.log(Object.keys(user));
// gives the values of the key only
console.log(Object.values(user));
// gives the seperate key with values in array fromat
console.log(Object.entries(user));


// by this way we can assign object inside object
const regularuser={
    email:"rajeshbro188@gmail.com",
    username:{
        fullname:{
            firstname:"Rajesh" ,
            last_name:"Rauniyar"
        }
    }
}

console.log(regularuser);
// we can print any object no matter it is inside of any object
console.log(regularuser.username.fullname.firstname);

const obj1={1:"a", 2:"b"}
const obj2={3:"h", 4:"u"}

// wrong way to merge any two object.
const obj4={obj1,obj2}
console.log(obj4);


// write way to merge any two or more objects
const obj5=Object.assign(obj1,obj2)
console.log(obj5);


// another best way to merge the two or more objects.we use this most of the time
const obj3={...obj1,...obj2}
console.log(obj3);

// we can make array and inside array we can create objects 
const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 2,
        email: "h@gmail.com"
    },
    {
        id: 3,
        email: "h@gmail.com"
    },
]
// we can print any aray any object just writing by thier index
console.log(users[1]);

// destructuring how it work:best way to print various objects values at once without printint once by one in multiple step
const course={
    name:"Rajesh",
    email:"rajeshbbbc",
    fee:1800
}
// printing object values is easier when we want to print a single object values
console.log(course.name);

// the work is hard printing single object value so to print by assigining once how we can do.just assign keys in {} and write same variable name
const{name,email,fee:feed}=course 
console.log(name);
// console.log(feed);we can change the key value in another variable and print
console.log(email);





