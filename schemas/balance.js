const mongoose = require("mongoose");

const model = mongoose.model;
const Schema = mongoose.Schema;

module.exports = model(
  "Wallet",
  new Schema({
    memberId: Number,
    amount: { type: Number, default: 0 },
  })
);
