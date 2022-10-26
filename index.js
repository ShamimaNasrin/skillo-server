const express = require('express')
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());

const courses = require('./data/courses.json');
const courseInfo = require('./data/courseInfo.json');

app.get('/', (req, res) => {
    res.send('Courses API Running');
});

//create api for courses Name
app.get('/courses', (req, res) => {
    res.send(courses);
})

app.listen(port, () => {
    console.log('Courses Server running on port', port);
})