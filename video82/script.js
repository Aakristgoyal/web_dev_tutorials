async function sleep() {
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve(54)
        }, 1000);
    })
}
(async function main(){
    let a=await sleep();
    console.log(a)
    let b=await sleep();
    console.log(b)
})()