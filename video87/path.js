import path from "path"
console.log(path)
let mypath="C:\\Users\\aakri\\OneDrive\\Desktop\\web dev\\video87\\aak3.txt"
console.log("path extension name:",path.extname(mypath))
console.log("path directory name:",path.dirname(mypath))
console.log("path base name:",path.basename(mypath))
console.log(path.join("c:\\","//programs//users//aak4.txt"))