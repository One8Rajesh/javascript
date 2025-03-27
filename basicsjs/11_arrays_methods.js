const marvel=["thor","spiderman","ironman"]
const dc= ["flash","superman","batman"]

// add both array in same array but it takes second array as one elemennt of that array
marvel.push(dc)
console.log(marvel)
// print the 3rd element of 1st element of array
console.log(marvel[3][1])

// effective method 
// it need to assign the methods in variable to print otherwise iit won't work so we assign allheros variable
let allheros=marvel.concat(dc)
console.log(allheros);

// another effective method which is most in use when we want to cocatenate more than two string
const heros=[...marvel,...dc]
console.log(heros);

// when array inside array is placed and we want each and every element of array
const array1=[1,2,3,4,[2,5],7,[5,8,9,[5,8]]]
const array2=array1.flat(Infinity)
console.log(array2);

// check is rajesh is in array or not
console.log(Array.isArray("rajesh"));
// print the array name rajesh is in array form seperating each letter in array form
console.log(Array.from("rajesh"));

// how to print in one array different variable assigned
const score1=500
const score2=400
const score3=200
console.log(Array.of(score1,score2,score3));
