console.log(Math);

// make the number positive only
console.log(Math.abs(-4));

// round off the number
console.log(Math.round(5.5));

// only convert the number in lower after decimal it won't consider number
console.log(Math.ceil(4.2));

// make the number 1 greater even if .1 decimal point is there in number
console.log(Math.floor(4.9));

// output max among number
console.log(Math.max(4,5,8,9,3,5));

// output min among number
console.log(Math.min(5,8,3,7,6));

// generate random number between 0 to 1
console.log(Math.random())

// we multipy 10 so decimal value of 0 to 1 changes to 0 to 10 and to avoid getting 0 we add +1 so we won't get 0 at anytime
console.log((Math.random()*10)+1)

// we just add .floor to not consider decimal point
console.log(Math.floor(Math.random()*10)+1)

const max=20
const min=10
// methods to generate the max and min value range number as random value
console.log(Math.floor(Math.random()*(max-min+1))+min)