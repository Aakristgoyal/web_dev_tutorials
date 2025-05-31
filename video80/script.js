let obj={
    a:1,
    b:"ak",
}
console.log(obj)
// let rabbit={
//     eats:true
// };
// let dog={
//     runs:true
// };
// dog.__proto__=rabbit;
class Animal{
    constructor(){
        window.name=name;
        console.log("class is created!!")
    }
    eats(){
        console.log("animal eats food")
    }
    runs(){
        console.log("animal runs at high speed")
    }
}
class Lion extends Animal{
    constructor(name){
        super(name)
        console.log("again class is created!!")
    }
    roars(){
        console.log("Lion roars like a king")

    }
    kills(){
        console.log("Sometimes it kills its prey")
    }
}
let dog=new Animal("bunny");
let l=new Lion("shera");
console.log(l)

