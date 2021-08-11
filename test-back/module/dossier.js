var mongoose = require("mongoose");
var Schema = mongoose.Schema;

const dossierSchema = new Schema(
  {
    status: {
      type: String,
    },
    type: {
      type: String,
    },
    provenance: {
      type: Schema.Types.ObjectId,
      ref: "Provenance",
    },
    statusCall: {
      type: String,
    },
    vendeur: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    categorie: {
      type: String,
    },
    entreprise: {
      type: String,
    },
    numeroEdOF: {
      type: String,
    },
    rappelGestionnaire: {
      type: Date,
    },
    dateRappel: {
      type: Date,
    },
    client: {
      type: Schema.Types.ObjectId,
      ref: "Client",
    },
    confidentialObservation: {
      type: String,
    },
    observation: {
      // a folder has two listes of observation : normal obervations and tracking observations
      type: [String],
    },
    tracking: {
      type: [String],
    },
    idWorkshop: {
      type: Schema.Types.ObjectId,
      ref: "Workshop",
    },
    workshopBeginDate: {
      type: Date,
    },
    workshopEndDate: {
      type: Date,
    },
    workshopDescription: {
      // la formation a été
      type: String,
    },
    coaching: {
      type: Boolean,
      default: false,
    },
    coach: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    certification: {
      type: Boolean,
    },
    certificationId: {
      type: String,
      default: false,
    },
    certificationPassword: {
      type: String,
    },
    appointments: {
      type: [Date],
      maxlength: 4,
    },
    performedAppointments: {
      type: [Boolean],
      required: function () {
        return this.performedAppointments.length < 3;
      },
    },
    appointmentsObservation: {
      type: [String],
    },
    preEvaluation: {
      type: Schema.Types.ObjectId,
      ref: "PreEvaluation",
    },
    evaluation: {
      type: Schema.Types.ObjectId,
      ref: "Evaluation",
    },
    crCoach: {
      type: Schema.Types.ObjectId,
      ref: "CRCoach",
    },
    facturation: {
      type: Schema.Types.ObjectId,
      ref: "Facturation",
    },

    files: [
      {
        type: Schema.Types.ObjectId,
        ref: "Fichier",
        default: [],
      },
    ],
    journalAppel: [
      {
        type: Schema.Types.ObjectId,
        ref: "JournalAppel",
      },
    ],
    filledFiles: [
      {
        type: Schema.Types.ObjectId,
        ref: "Fichier",
        default: [],
      },
    ],
    signatures: [
      {
        type: Schema.Types.ObjectId,
        ref: "Signature",
        default: [],
      },
    ],
    cpf: {
      type: String,
    },
    opca: {
      type: String,
    },
    financementPerso: {
      type: String,
    },
    remise_cpf: {
      type: Number,
    },
    remmise_opca: {
      type: Number,
    },
    remmise_fp: {
      type: Number,
    },
  },
  { timestamps: true }
);

const Dossier = mongoose.model("Dossier", dossierSchema);

exports.Dossier = Dossier;
