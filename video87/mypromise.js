import fs from "fs/promises"
let a=await fs.readFile("aak3.txt")
const b=await fs.appendFile("aak3.txt","wow beautifool..!!")
console.log(a.toString(),b)
