const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// Set express to listen to the public directory
const port = process.env.PORT || 5001;

// Create deedRoutes
const deedAPIRoutes = require('./routes/api/goodDeeds');

// *****************************************************************
// ******************        Database Setup       ******************
// *****************************************************************
function setUpDatabase() {
    // DB Config
    const db = require('./client/config/key').mongoURI;

    // Get a reference to the mongoose data model package
    const mongoose = require('mongoose');

    // Actually connect to the database (lets use a promise)
    mongoose.connect(db, {useNewUrlParser: true}).then(
        () => {
            console.log("Successfully connected to the database.");
        },
        err => {
            console.log("ERROR connecting to the database.");
            throw err;
        }
    );
}

// Comment this if you want to run database setup
setUpDatabase();


// Bodyparser Middleware
app.use(bodyParser.json());

// Use Routes
app.use('/api', deedAPIRoutes);
app.use('/', );

console.log(`Listener started on port ${port}...`);
app.listen(port);