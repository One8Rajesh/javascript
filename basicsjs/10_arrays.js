const arr1=[5,8,6,8,9,2]
console.log(arr1);

console.log(arr1.indexOf(2));
const arr2=new Array(5,8,6,5,2)
console.log(arr2);
console.log(typeof arr2);

// methods of array
console.log(arr1.push(7));
console.log(arr1.pop());


// myArr.unshift(9)
// myArr.shift()

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

// const newArr = myArr.join()

// console.log(myArr);
// console.log( newArr);


// slice, splice

console.log("A ", arr1);

const myn1 =arr1.slice(1, 3)

console.log(myn1);
console.log("B ", arr1);


const myn2 = arr1.splice(1, 3)
console.log("C ", arr1);
console.log(myn2);


