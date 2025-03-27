// date printing different way
let mydate=new Date()
console.log(mydate.toLocaleString());
console.log(typeof mydate);
console.log(mydate.toDateString());
console.log(mydate.toString());

// print date by assigning by our own 
let mycreateddate=new Date(2004,4,11)
console.log(mycreateddate.toDateString())
console.log(mycreateddate.toString())

// calculate the second 
let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log(mycreateddate.getTime());
console.log(Math.floor(Date.now()/1000));

// use to print the month day year speicified 
let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

// `${newDate.getDay()} and the time `

newDate.toLocaleString('default', {
    weekday: "long",
    
})