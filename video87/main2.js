const fs=require("fs")
console.log(fs)
fs.writeFile("aak3.txt","this is main2.js <-",(err)=>{
    if(err)console.error("error has occured",err);
    else{
        console.log("file aak3.txt has been created..")
    }
})
fs.appendFile("aak3.txt","what the hell",(e,d)=>{
    console.log(d);
})

