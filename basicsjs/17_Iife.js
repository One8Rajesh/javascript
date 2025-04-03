// Iife basically use to avoid the global variable pollution
// name IIfe where function is define
(function user(){
    console.log(`Hi i am rajesh`);
//   we have to give ; afer () otherwise it Won't work  
})();

// unamed IIfe where function is not define
((name)=>{
    console.log(`I'm user ${name}`);
    // passing parameters
})("Rajesh")