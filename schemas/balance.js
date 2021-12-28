const { model, Schema } = require("mongoose");

module.exports = model(
  "Balance",
  new Schema({

    _id: mongoose.Schema.Types.ObjectId,
    guildId: String,
    memberId: String,
    amount: {type: number, default:0}
  })
);

 
 
 
