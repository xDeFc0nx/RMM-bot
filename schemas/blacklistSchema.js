const mongoose = require("mongoose");

const blacklistSchema = new mongoose.Schema({
  word: {
    type: String,
    required: true,
    unique: true, // Ensures that each word is unique in the blacklist
  },
});

module.exports = mongoose.model("Blacklist", blacklistSchema);
