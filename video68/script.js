let tg=document.getElementsByClassName("box");
console.log(tg)
tg[1].style.backgroundColor="red"
document.getElementById("blue").style.backgroundColor="blue";
document.querySelector(".box").style.backgroundColor="green"
document.querySelectorAll(".box").forEach(e=>{
    e.style.backgroundColor="green"
})