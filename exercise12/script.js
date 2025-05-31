console.log("js initiating...");
let boxes=document.getElementsByClassName("box");
function randomColorGenerator() {
    let a=Math.ceil(0+Math.random()*255);
    let b=Math.ceil(0+Math.random()*255);
    let c=Math.ceil(0+Math.random()*255);
    return `rgb(${a},${b},${c})`
}
Array.from(boxes).forEach(e => {
    e.style.backgroundColor=randomColorGenerator();
});