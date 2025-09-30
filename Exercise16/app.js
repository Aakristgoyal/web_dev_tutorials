const express = require('express');
const path=require('path');
const app = express();
const port = 3000;

let names = ['Aakrist', 'Raghav', 'Rohit', 'Deepak'];
let salaries = [250000, 320000, 500000, 700000, 848000];
let languages = ['python', 'java', 'javascript', 'cpp'];
let cities = ['New york', 'Mumbai', 'Paris', 'Abu dhabi', 'Bangalore'];
let bool = [true, false];

function getRandom(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

function recordGenerator(count) {
    let records = []
    for (let i = 0; i < count; i++) {
        let record = {
            name: getRandom(names),
            salary: getRandom(salaries),
            language: getRandom(languages),
            city: getRandom(cities),
            isManager: getRandom(bool)
        }
        records.push(record);
    }
    return records;
};
app.use(express.static(path.join(__dirname,'public')));
app.get("/generate-data", (req, res) => {
    const data = recordGenerator(10);
    res.json(data);
})
app.listen(port, () => {
    console.log(`server running at http://localhost:${port}`)
})