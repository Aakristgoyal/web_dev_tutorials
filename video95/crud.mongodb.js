use('crudDB')
console.log(db)
db.createCollection('courses')
// insert documents -insertOne,insertMany
// db.courses.insertOne({
//     name:"c++",
//     price:0,
//     projects:43,
//     author:"Aak"
// })
// db.courses.insertMany([
//   {
//     "name": "Java",
//     "price": 50,
//     "projects": 120,
//     "author": "Sam"
//   },
//   {
//     "name": "Python",
//     "price": 0,
//     "projects": 210,
//     "author": "Riya"
//   },
//   {
//     "name": "JavaScript",
//     "price": 30,
//     "projects": 180,
//     "author": "Dev"
//   },
//   {
//     "name": "Go",
//     "price": 25,
//     "projects": 75,
//     "author": "Ankit"
//   },
//   {
//     "name": "Rust",
//     "price": 45,
//     "projects": 60,
//     "author": "Mira"
//   },
//   {
//     "name": "Ruby",
//     "price": 20,
//     "projects": 90,
//     "author": "Neha"
//   },
//   {
//     "name": "Swift",
//     "price": 60,
//     "projects": 100,
//     "author": "Jay"
//   },
//   {
//     "name": "Kotlin",
//     "price": 40,
//     "projects": 85,
//     "author": "Priya"
//   },
//   {
//     "name": "PHP",
//     "price": 15,
//     "projects": 130,
//     "author": "Zara"
//   },
//   {
//     "name": "TypeScript",
//     "price": 35,
//     "projects": 160,
//     "author": "Yash"
//   }
// ])
// read documents
console.log(db.courses.find({price:0}))
// update documents
db.courses.updateOne({price:0},{$set:{price:200}})
db.courses.updateMany({price:0},{$set:{price:1000}})
// delete documents
db.courses.deleteMany({price:{$lt:100}})