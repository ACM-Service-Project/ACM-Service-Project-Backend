const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  username: { type: String, required: true, unique: true },
  phone: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  // Field to handle deactivation rather than just deletion
  active: { type: Boolean, required: true, default: true }, 
  role: { type: String, required: true, enum: ['Manager', 'Employee', 'Volunteer']}
});

const User = mongoose.model("User", UserSchema);
module.exports = User;
