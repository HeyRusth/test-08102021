const mongoose = require("mongoose");

// Creating a user Schema
const ProvenanceSchema = new mongoose.Schema({
  provenance: {
    type: String,
    required: true,
  },
  user: {
    type: String,
    required: true,
  },
  creationDate: {
    type: Date,
    default: Date.now,
  },
  actif: {
    type: Boolean,
  },
});

const Provenance = mongoose.model("Provenance", ProvenanceSchema);

exports.Provenance = Provenance;
