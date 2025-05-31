console.log("Loops in js!!")
let a=0;
for (let i = 0; i < 6; i++) {
    console.log (a+i);
    
}
let obj = {
    role: "manager",
    position: "HR",
    salary: "400k"
}
for (const key in obj) {
    console.log(key) 
}
for (const element of "hey whatsupp") {
    console.log(element)    
}
let i=9;
while (i>6) {
    console.log(i);
    i--;    
}
let j=0;
do {
    console.log(j);
    j++;
} while (j<7);