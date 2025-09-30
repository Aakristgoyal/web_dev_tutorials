const express = require('express')
const app = express()
const mongoose = require('mongoose');
const Employee = require('./models/Employee');
mongoose.connect('mongodb://localhost:27017/company');
const port = 3000

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index', req.query);
});

app.get('/generate', async(req, res) => {
    await Employee.deleteMany({});
    let randomNames=["Aakrist","Raghav","Suresh","Rohit","Deepak","Rajeev","Aadarsh"];
    let randomSalaries=[100000,2000000,300000,500000,540000,848000,1200000];
    let randomCities=["Delhi","Mumbai","Kolkata","Chennai","Bangalore","Newyork","Washington Dc"]
    let randomLanguages=["python","java","javascript","typescript","react","cpp","c","c#"];
    function getRandom(arr){
        return arr[Math.floor(Math.random()*arr.length)];
    }
    for (let i = 0; i < 10; i++) {
        let record = await Employee.create({
            name: getRandom(randomNames),
            salary:getRandom(randomSalaries),
            city: getRandom(randomCities),
            language: getRandom(randomLanguages),
            isManager: Math.random() < 0.5
        });
        console.log(record);
    }
    res.json({ message: "done" });
})
app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})
