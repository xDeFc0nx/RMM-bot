const mongoose = require("mongoose");
const { Database } = require("../../botconfig/config.json");

module.exports = async () => {
  await mongoose.connect(Database, {
    useNewUrlParser: true,
    useUnifiedtopology: true,
  });
  return mongoose;
};
