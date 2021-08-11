const mongoose = require("mongoose");

const EvaluationSchema = new mongoose.Schema({
  attentes: {
    type: [String],
  },
  duree: {
    type: String,
  },
  prochainesAttentes: {
    type: String,
  },
  autorisation: {
    type: Boolean,
    default: false,
  },
  estimation: {
    type: String,
  },
  questionsRestées: {
    type: Boolean,
  },
  avisPasserelle: {
    type: String,
  },
  avisExplication: {
    type: String,
  },
  suggestions: {
    type: String,
  },
  pedagogieCoach: {
    type: String,
  },
  ecouteCoach: {
    type: String,
  },
  claireteCoach: {
    type: String,
  },
  adj1: {
    type: String,
  },
  adj2: {
    type: String,
  },
  adj3: {
    type: String,
  },
});

const Evaluation = mongoose.model("Evaluation", EvaluationSchema);

exports.Evaluation = Evaluation;
