const express = require('express');
const app = express();

app.set('port', process.env.PORT || 8000);

// Parses key value pairs in request
app.use(express.urlencoded({ extended: true }));
// Converts json strings to the an object and attaches it to req.body
app.use(express.json());

// Use cors package to allow connections from all domains
const cors = require('cors');
app.use(cors());

// Redirect any requests to the homepage to blogs API
app.get('/', (req, res) => {
  res.redirect('/api/blog');
});

// Hand off requests on the '/api/blog' route to the blog controller
const blogController = require('./controllers/blogsController');
app.use('/api/blog/', blogController);

// Require the user resource routes and controllers
const userController = require('./controllers/usersController');
app.use('/api', userController);

app.listen(app.get('port'), () => {
  console.log(`✅ Listening on port ${app.get('port')}`);
});