let random=Math.random();
console.log(random); 
let a=prompt("Enter First number");
let b=prompt("Enter operation");
let c=prompt("Enter second number");
let obj={
    "+":"-",
    "*":"+",
    "-":"/",
    "/":"*",
}
console.log(random); 
if (random>0.1){
    alert(`The result is ${eval(`${a} ${b} ${c}`)}`);
}
else{
    c=obj[c];
    alert(`The result is ${eval(`${a} ${b} ${c}`)}`);
}


