let a=Math.random();
if(a<0.33){
    first="crazy"
}
else if (a>=0.33 && a<0.66) {
   first="Amazing";
    
} else {
    first="Fire"
}
let b=Math.random();
if(b<0.33){
    second="Engine"
}
else if (b>=0.33 && b<0.66) {
    second="Foods";
    
} else {
    second="Garments"
}
let c=Math.random();
if(c<0.33){
    third="Bros"
}
else if (c>=0.33 && c<0.66) {
    third="Limited";
    
} else {
    third="Hub"
}
console.log(`${first}${second}${third}`)
