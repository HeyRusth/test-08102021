const mongoose = require("mongoose");

const CRCoachSchema = new mongoose.Schema({
  connaissance: {
    type: Boolean,
    default: false,
  },
  correspondanceFormation: {
    type: Boolean,
  },
  implicationStagiaire: {
    type: Boolean,
  },
  compteRenduFormation: {
    type: String,
  },
  programmeVu: {
    type: Boolean,
  },
  progressionStagiaire: {
    type: Boolean,
  },
});

const CRCoach = mongoose.model("CRCoach", CRCoachSchema);

exports.CRCoach = CRCoach;
