var mongoose = require("mongoose");

const clientSchema = new mongoose.Schema({
  civility: {
    type: String,
  },
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  dateOfBirth: {
    type: Date,

  },
  email: {
    type: String,
    required: true,
  },
  mobile: {
    type: Number,
    required: true,
  },
  fixe: {
    type: Number,
  },
  adresse: {
    type: String,
  },
  codePostal: {
    type: Number,
  },
  ville: {
    type: String,
  },
  budgetCPF: {
    type: Number,
  },
  budgetDIF: {
    type: Number,
  },
  autreBudget:{
    type: Number,
  },
  difDisponibility: {
    type: Boolean,
    default: false,
  },
  qualification: {
    type: String,
  },
  rechercheEmploi: {
    type: Boolean,
    default: false,
  },
});

const Client = mongoose.model("Client", clientSchema);

exports.Client = Client;
