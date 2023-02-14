const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Schemas allows structure to be enforced each time a document is created.
// The type and required properties set the rules for whether the value is optional and its format.
const PatronSchema = new Schema({
  firstName: { type: String, required: true },
  middleName: String,
  lastName: { type: String, required: true },
  phone: { type: String, required: true },
  email: { type: String, required: true },
});

// The Patron schema creates a collection in the database.
// The collection's name is always the lowercase, plural form of this model, in this case "patrons."
const Patron = mongoose.model("Patron", PatronSchema);
module.exports = Patron;
