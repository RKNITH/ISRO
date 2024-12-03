const mongoose = require("mongoose");

const launchesSchema = new mongoose.Schema({
  flightNumber: {
    type: Number,
    required: true,
  },
  launchDate: {
    type: Date,
    required: true,
  },
  mission: {
    type: String,
    required: true,
  },
  rocket: {
    type: String,
    required: true,
  },
  target: {
    type: String,
  },
  customers: [String],
  upcoming: {
    type: Boolean,
    reuqired: true,
  },
  success: {
    type: Boolean,
    reuqired: true,
    default: true,
  },
});

// Connects launchesSchema with "launches" collection 
module.exports = mongoose.model("Launch", launchesSchema);