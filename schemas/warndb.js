const mongoose = require('mongoose')

const warndb = new mongoose.Schema({
    guild: String,
    channel: String,
    content: Array,
})

module.exports = mongoose.model("warndb", warndb);