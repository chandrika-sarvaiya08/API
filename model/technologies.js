const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const technologiesSchema = new Schema({
  technolgyPicture: {
    type: String,
    required: true,
    unique: true,
  },
  technolgyTitle: {
    type: String,
    required: true,
    unique: true,
  },
});

const Technology = mongoose.model("Technology", technologiesSchema);
module.exports = Technology;
