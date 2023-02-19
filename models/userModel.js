const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  firstName: { type: String, required: true },
  middleName: String,
  lastName: { type: String, required: true },
  // username: { type: String, required: true }, // I dont think this field is necessary
  phone: { type: String, required: true },
  email: { type: String, required: true },
});

const User = mongoose.model("User", UserSchema);
module.exports = User;