const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const auth = require('./routes/api/auth.routes.js');
const courses = require('./routes/api/courses');
const applicant=require('./routes/api/applicant');
var cors = require('cors');
const app = express();

// Bodyparser Middleware
app.use(bodyParser.json());

// DB Config
const db = require('./config/keys').mongoURI;


// Connect to Mongo
mongoose
    .connect(db, { useNewUrlParser: true }) // Adding new mongo url parser
    .then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log(err));

mongoose.set('debug', true);
app.use(cors({ origin: 'http://localhost:3000/', credentials: true }));

// Use Routes
app.use('/api/courses', courses);
app.use(express.json());
app.use('/api/auth', auth);
app.use('/api/applicant',applicant)



if (process.env.NODE_ENV === 'production') {
    // Set static folder
    app.use(express.static('client/build'));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));