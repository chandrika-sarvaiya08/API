const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const clientSchema = new Schema({
  clientTitle: {
    type: String,
    required: true,
    unique: true,
  },
  description: {
    type: String,
    required: true,
  },
  clientProfile: {
    type: String,
    required: true,
  },
  clientName: {
    type: String,
    required: true,
  },
  Designation: {
    type: String,
    required: true,
  },
});

const Client = mongoose.model("Client", clientSchema);
module.exports = Client;
