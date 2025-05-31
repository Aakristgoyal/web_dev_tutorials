const fs=require("fs")
console.log(fs)
function fsfunc1(){
    return new Promise((resolve,reject)=>{
        fs.writeFile("aak2.txt","this is second file that has been created",(err)=>{
            if(err)reject(err);
            console.log("File has been created")
            fs.readFile("aak2.txt",(error,data)=>{
                if(error) reject(error);
                else resolve(data.toString());
            })
        })
    })
}
async function fsfunc() {
    console.log("Starting...")
    return new Promise((resolve,reject)=>{
        try{
            fs.writeFileSync("aak.txt","hello sir nice to meet you")
            fs.readFile("aak.txt",(error,data)=>{
                if(error)reject(error);
                else resolve(data.toString());
            })
        }
        catch(err){
            console.log(err);
        }
    });
}
async function main(){
    try{
        const data1=await fsfunc();
        console.log("aak.txt content:",data1)
        const data2=await fsfunc1();
        console.log("aak2.txt content:",data2)
        console.log("Ending...")
    }
    catch(err){
        console.log(err);
    }
}
main();