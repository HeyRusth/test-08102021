const mongoose = require("mongoose");

const PreEvaluationSchema = new mongoose.Schema({
  langue: {
    type: Boolean,
    default: false,
  },
  niveau: {
    type: String,
  },
  niveauEstimation: {
    type: String,
  },
  note: {
    type: String,
  },
  grammaire: {
    type: [String],
  },
  vocabulaire: {
    type: [String],
  },
  comprehensionOrale: {
    type: [String],
  },
});

const PreEvaluation = mongoose.model("PreEvaluation", PreEvaluationSchema);

exports.PreEvaluation = PreEvaluation;
