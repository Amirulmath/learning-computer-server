const express = require('express')
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());

const courseLists = require('./data/courseLists.json');
const courses = require('./data/course.json');

app.get('/', (req, res) =>{
    res.send('Course API Running');
});

app.get('/course-lists', (req, res) =>{
    res.send(courseLists)
});

app.get('/all-course', (req, res) =>{
    res.send(courses);
});

app.get('/list/:id', (req, res) =>{
    const id =req.params.id;
    const lists = courses.filter(course => course._id ===id);
    res.send(lists);
})

app.get('/course/:id', (req, res) =>{
    const id = req.params.id;
    const selecteCourse = courses.find(course => course._id === id);
    res.send(selecteCourse);
})

app.listen(port, () =>{
    console.log('Learning Computer Server running', port);
})