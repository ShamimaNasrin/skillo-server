const express = require('express')
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());

const courses = require('./data/courses.json');
const coursesInfo = require('./data/courseInfo.json');

app.get('/', (req, res) => {
    res.send('Courses API Running');
});

//create api for courses Name
app.get('/courses', (req, res) => {
    res.send(courses);
})

//create all Course info api
app.get('/courses-info', (req, res) => {
    res.send(coursesInfo);
})

//creating course api according to courseid(for a single course)
app.get('/courses-info/:id', (req, res) => {
    // console.log(req.params);
    const id = req.params.id;
    const selectedCourse = coursesInfo.find(c => c._id === id);
    res.send(selectedCourse);
    console.log(selectedCourse);
})

app.get('/checkout/:id', (req, res) => {
    // console.log(req.params);
    const id = req.params.id;
    const selectedCourse = coursesInfo.find(c => c._id === id);
    res.send(selectedCourse);
    console.log(selectedCourse);
})

app.listen(port, () => {
    console.log('Courses Server running on port', port);
})