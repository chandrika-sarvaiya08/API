const mongoose = require('mongoose');

const Schema = mongoose.Schema;   // Create a new schema
const userDataSchema = new Schema({
  email: {
    type: String,
    required: true, 
    unique: true
  },
  password: {
    type: String,
    required: true, 

  }
});

const User = mongoose.model('User', userDataSchema);     // Create a model from the schema

module.exports = User;  // Export the model
