let a=prompt("Enter first number:")
let b=prompt("Enter second number:")
let sum=parseInt(a)+parseInt(b);
if(isNaN(a)||isNaN(b)){
    throw SyntaxError("you can't add strings as integer!!")
}
try {
    console.log(sum*c);
    
} catch (error) {
    console.log("Error hai be  <-");
    console.log(error)
}
console.log(sum);