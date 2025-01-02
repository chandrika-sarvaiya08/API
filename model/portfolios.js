const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const portfolioSchema = new Schema({
  category: {
    type: String,
    required: true,
    unique : true
  },
  picture: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

const Portfolio = mongoose.model("Portfolio", portfolioSchema);
module.exports = Portfolio;
