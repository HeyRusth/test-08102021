const { Dossier } = require("../module/dossier");
const {
  dateEvaluation,
  stringEvaluation,
  booleanChecker,
} = require("../utility/dossier-filter");

exports.dossiers = async (req, res, next) => {
  try {
    /**
     * Query mongo db
     */
    let dossiers = await Dossier.find()
      .populate("facturation")
      // .populate("idWorkshop") // Workshop model is missing; hence, commented out.
      .populate("vendeur")
      .populate("provenance")
      .populate("client");

    if (!dossiers) {
      const error = new Error("Failed to fetch data from the database.");
      error.statusCode = 404;
      throw error;
    }

    res.json(dossiers);
  } catch (error) {
    next(error);
  }
};

exports.filters = async (req, res, next) => {
  try {
    const {
      CreationDateMin,
      CreationDateMax,
      workshopBeginDateMin,
      workshopBeginDateMax,
      workshopEndDateMin,
      workshopEndDateMax,
      dateFacturationMax,
      dateFacturationMin,
      payementVendeur,
      payementCoach,
      Tarifs,
      types,
      call,
      vendeurs,
      workshops,
      provenances,
      coachs,
      statusDossier,
    } = req.body;

    const filters = {
      // createdAt
      createdAt: (createdAt) =>
        dateEvaluation(CreationDateMin, CreationDateMax, createdAt),

      // workshopBeginDate
      workshopBeginDate: (workshopBeginDate) =>
        dateEvaluation(
          workshopBeginDateMin,
          workshopBeginDateMax,
          workshopBeginDate
        ),

      // workshopEndDate
      workshopEndDate: (workshopEndDate) =>
        dateEvaluation(workshopEndDateMin, workshopEndDateMax, workshopEndDate),

      // facturation
      facturation: (facturation) =>
        dateEvaluation(
          dateFacturationMin,
          dateFacturationMax,
          facturation.DateFacturation
        ),

      // idWorkshop
      idWorkshop: (workshop) => stringEvaluation(Tarifs, workshop.code_tarif),

      // type
      type: (type) => stringEvaluation(types, type),

      // coach
      coach: (coach) => stringEvaluation(coachs, coach),

      // statusCall
      statusCall: (statusCall) => stringEvaluation(call, statusCall),

      // status
      status: (status) => stringEvaluation(statusDossier, status),

      // provenance
      provenance: (provenance) =>
        stringEvaluation(provenances, provenance.provenance),

      // vendeur
      vendeur: (vendeur) => stringEvaluation(vendeurs, vendeur.name),
    };

    const filters2 = {
      // idWorkshop
      idWorkshop: (workshop) => stringEvaluation(workshops, workshop.intitule),

      // facturation
      facturation: (facturation) => {
        if (booleanChecker(payementVendeur)) {
          if (booleanChecker(payementCoach)) {
            return true;
          }
          if (facturation.CoachPaye === payementCoach) {
            return true;
          }
          return false;
        } else {
          if (booleanChecker(payementCoach)) {
            if (facturation.VendeurPaye === payementVendeur) {
              return true;
            }
          }
          if (
            facturation.VendeurPaye === payementVendeur &&
            facturation.CoachPaye === payementCoach
          )
            return true;
          return false;
        }
      },
    };

    /**
     * Query mongo db
     */
    let dossiers = await Dossier.find()
      .populate("facturation")
      // .populate("idWorkshop") // Workshop model is missing; hence, commented out.
      .populate("vendeur")
      .populate("provenance")
      .populate("client");

    if (!dossiers) {
      const error = new Error("Failed to fetch data from the database.");
      error.statusCode = 404;
      throw error;
    }

    let result = dossiers;

    /**
     * Compared to loop through each item and then loop through each key logic, it is better to loop through
     * each filter key and then loop inside through each data/item. The first filter may reduce the number
     * of data/items to be re-evaluated by the next filter key until a small chunks of data remain which
     * will be evaluated by the last filter key.
     */

    let filterKeys = Object.keys(filters);
    filterKeys.forEach((key) => {
      result = result.filter((item) => {
        if (typeof filters[key] !== "function") return true;
        return filters[key](item[key]);
      });
      console.log(key, result.length); // uncomment this to show how items are reduced per filter
    });

    filterKeys = Object.keys(filters2);
    filterKeys.forEach((key) => {
      result = result.filter((item) => {
        if (typeof filters[key] !== "function") return true;
        return filters[key](item[key]);
      });
      console.log(key, result.length); // uncomment this to show how items are reduced per filter
    });

    res.send(result); // whether or not empty, results will be sent.
  } catch (error) {
    next(error);
  }
};
