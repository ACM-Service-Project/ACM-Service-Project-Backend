const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const VisitSchema = new Schema({
  visitDate: {
    type: Date,
    required: true,
  },
  patronId: {
    type: Schema.Types.ObjectId,
    required: true,
  },
});

const Visit = mongoose.model("Visit", VisitSchema);
module.exports = Visit;
