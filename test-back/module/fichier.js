const mongoose = require("mongoose");

const FichierSchema = new mongoose.Schema({
  DateCreation: {
    type: Date,
    default: Date.now,
  },
  taille: {
    type: String,
  },
  name: {
    type: String,
  },
  type: {
    type: String,
  },
  dossier_Id:{
    type:String,
  }
});

const Fichier = mongoose.model("Fichier", FichierSchema);

exports.Fichier = Fichier;
