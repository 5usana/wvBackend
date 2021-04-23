const mongoose = require('../db/connection');

// Define a schema that takes an object of key/value pairs
// the key is the name of the field
// the value is the type of data it will be
// https://mongoosejs.com/docs/schematypes.html
const BlogSchema = new mongoose.Schema(
  {
    entry: String,
    context: String,
  },
  {
    timestamps: true,
  }
);

// Create a model using the schema, and attaches it to our mongoose instance.
// A model is used to query and change data in the database
const Blog = mongoose.model('Blog', BlogSchema);

// Export the instantiated model for use elsewhere in our app
module.exports = Blog;
