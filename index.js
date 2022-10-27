const express = require('express')
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());

const courseLists = require('./data/courseLists.json');

app.get('/', (req, res) =>{
    res.send('Course API Running');
});

app.get('/course-lists', (req, res) =>{
    res.send(courseLists)
})

app.listen(port, () =>{
    console.log('Learning Computer Server running', port);
})