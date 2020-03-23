/* console.log(process.argv); */

//getting arguments passed in ternimal and skipped first 2 arguments
let args = process.argv.slice(2)


//distructuring args ,storing third argument into operator variable and remain all arguments in arg.
const [operator, ...arg]=args


//mapping through arg array and convert each argument into numbers
const numbers= arg.map(num=>{
    return parseInt(num)
})

//created function to sum all numbers in array
let sum =numbers.reduce((acc,number)=>{
    acc=acc+number
    return acc
},0)


//checking operator
if(operator==="sum"|| operator==="add"){
    console.log(sum)
} else{
    console.log("please provide valid operator");
}

// import Default and named modules
 const anything =  require("./exportDefault") //default import  
const {mult} = require("./namedExport.js.js") //named import 

console.log(mult);
console.log(anything);