const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const facturationSchema = new Schema({
  MontantFacture: {
    type: Number,
  },
  payePar: {
    type: String,
  },
  CoutElearning: {
    type: String,
  },
  DateReglementElearning: {
    type: Date,
  },
  CoutCertification: {
    type: String,
  },
  DateReglementCertif: {
    type: Date,
  },
  ElearningPaye: {
    type: Boolean,
    default: false,
  },
  CertifPaye: {
    type: Boolean,
    default: false,
  },
  AutreCout1: {
    type: String,
  },
  AutreCout2: {
    type: String,
  },
  DateReglementCout1: {
    type: Date,
  },
  DateReglementCout2: {
    type: Date,
  },
  Cout1Paye: {
    type: Boolean,
    default: false,
  },
  Cout2Paye: {
    type: Boolean,
    default: false,
  },
  CoutCoach: {
    type: String,
  },
  DateReglementCoach: {
    type: Date,
  },
  CoachPaye: {
    type: Boolean,
    default: false,
  },
  CoutVendeur: {
    type: String,
  },
  DateReglementVendeur: {
    type: Date,
  },
  VendeurPaye: {
    type: Boolean,
    default: false,
  },
  Factor: {
    type: Boolean,
  },
  NFacturation: {
    type: String,
    default: null,
  },
  DateFacturation: {
    type: Date,
    default: null,
    //default: Date.now,
  },
  NAvoir: {
    type: String,
    default: null,
  },
  DateAvoir: {
    type: Date,
    default: null,
    //default: Date.now,
  },
});

module.exports = mongoose.model("Facturation", facturationSchema);
