const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: String,
  username: String,
  phone: Number,
  password: String,
});

module.exports = mongoose.model("User", UserSchema);
