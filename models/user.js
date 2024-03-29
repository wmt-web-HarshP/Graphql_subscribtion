const { model, Schema } = require("mongoose");

const userSchema = new Schema({
  username: String,
  password: String,
  email: String,
  address: String
});

module.exports = model("User", userSchema);
