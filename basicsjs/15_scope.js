// In scope we can acess inside the global variable but outside we can't use local variable.
function one(){
    const name="Rajesh"

    function two(){
        const website="Rajesh.com"
        // we can acess the global name variable inside any loop and function
        console.log(name)
    }
    // website is local variable so we can't acess outside the function or loop
    // console.log(website)
    two()
}
one()

// for loop
if(true){
    const work="IT"

    if(work==="IT"){
        const position=" Hr"
        console.log(work + position);
        
    }
    // console.log(position);
}
// console.log(work);

