const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// The schema type ObjectId specifies that the value should be in ObjectId format (is not an integer.)
// The ref property is used to specify which collection the Id is referencing. 
const UserRoleSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "User"
  },
  roleId: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "Role"
  },
});

const UserRole = mongoose.model("UserRole", UserRoleSchema);
module.exports = UserRole;
