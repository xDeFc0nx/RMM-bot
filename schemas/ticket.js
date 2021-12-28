const { model, Schema } = require("mongoose");

module.exports = model(
  "tickets",
  new Schema({
    MemberId: String,
    TicketId: String,
    TicketId: String,
    ChannelID: String,
    Closed: Boolean,
    Locked: Boolean,
    Type: String,
  })
);
