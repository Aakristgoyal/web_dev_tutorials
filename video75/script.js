setTimeout(() => {
    console.log("Aakrist how are you?")
}, 0);
console.log("Ak how are you?")
const callback=(arg)=>{
    console.log(arg);

}
const onloadScript=(src,callback)=>{
    let sc=document.createElement("script");
    sc.src=src;
    sc.onload=callback("Ak");
    document.head.append(sc);

}
onloadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js",callback)
// pyramid of doom=>(callback fn is called continuosly under another callback fn)
let prom=new Promise((resolve,reject)=>{
    let a =Math.random();
    if (a<1) {
        reject("it doesn't supports the condition")
    } else {
        setTimeout(() => {
            console.log("hey");
            resolve("Ak")
        }, 200);
        
    }
})
prom.then((e)=>{
    console.log(e);

}).catch((err)=>{
    console.log(err);
})