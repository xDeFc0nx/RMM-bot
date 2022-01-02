const mongoose = require("mongoose");
const mongoAtlasUri =
  "mongodb+srv://nehar:aezakmi@cluster0.9pfhd.mongodb.net/Cluster0?retryWrites=true&w=majority";
module.exports = function () {
  try {
    // Connect to the MongoDB cluster
    mongoose.connect(
      mongoAtlasUri,
      { useNewUrlParser: true, useUnifiedTopology: true },
      () => console.log(" Mongoose is connected")
    );
  } catch (e) {
    console.log("could not connect", e);
  }

  const dbConnection = mongoose.connection;
  dbConnection.on("error", (err) => console.log(`Connection error ${err}`));
  dbConnection.once("open", () => "");
  return "Success";
};
