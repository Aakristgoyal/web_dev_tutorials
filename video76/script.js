// async function returndata(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             resolve(124)
//         }, 3500);
//     })
// }
async function main() { 
    console.log("loading modules")
    let a=await getdata();
    console.log(a)
    console.log("Loading data")
    console.log("Loading data2")
    console.log("process data")
}
main()
// a.then(()=>{
    //     console.log("Loading data")
    //     console.log("Loading data2")
    //     console.log("process data")
    
    // })
    // promise settle means resolve or reject
    // resolve means promise has settled
    // reject means promise has not settled
async function getdata(){
    let b=await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
          title: 'foo',
          body: 'bar',
          userId: 1,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
      let data=await b.json()
      return data
        // let b=await fetch('https://jsonplaceholder.typicode.com/todos/1')
        // data=await b.json()
        // console.log(b)
        // return data
    
    }
    
