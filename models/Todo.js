const mongoose = require("mongoose");

const todoSchema = mongoose.Schema({
  title: String,
  isComplete: Boolean,
});

module.exports = mongoose.model("Todo", todoSchema);
