// Require the Blog model
const Blog = require('../models/Blog');
// Require the data
const seedData = require('./seeds.json');

// Delete any existing documents in the blogs collection
Blog.deleteMany()
  // Use insertMany and pass it the seed data
  .then(() => Blog.insertMany(seedData))
  // Log the successful results
  .then(console.log)
  // Log any errors if things didn't work
  .catch(console.error)
  // Use finally, so that this code will run whether or not
  // things worked and close our connection to the database.
  .finally(process.exit);
