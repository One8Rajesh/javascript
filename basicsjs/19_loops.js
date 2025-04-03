for (let index = 0; index <=10 ; index++) {
    // const element = index
    if (index==6) {
        console.log("6 is the best number");
        
    }
    console.log(index);
    
    
}

// for (let i = 1;i <=10;i++) {
//     console.log(`for ${i}:`);
    
//     for (let j = 1; j <=10 ; j++) {
//         console.log(`${i} x ${j} = ${i*j}\n`)
        
//     }
// }

const myarray=["rajesh","prashant","ritesh"]
console.log(myarray.length);
for (let index = 0; index < myarray.length; index++) {
    const element = myarray[index];
    console.log(element);   
}

// break and coninue loops
for (let i = 1; i <10; i++) {
    if (i==5) {
        console.log("5 is detected");
        break
        // it break the loop further assign loop will not work
    }
    console.log(`value of i is ${i}`);
}
for (let i = 1; i <10; i++) {
    if (i==7) {
        console.log("7 is detected");
        continue
        // continue just skip the one value and continue rest of it
    }
    console.log(`value of i is ${i}`);
}
