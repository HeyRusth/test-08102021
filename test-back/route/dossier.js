const dossierController = require("../controller/dossier")
const router = require("express").Router();

/**
 *  RCV 08/11: LIST OF ALL ROUTERS UNDER PARENT ROUTER FILTERS
 */
router.get("/", dossierController.dossiers);

router.post("/filters", dossierController.filters);


module.exports = router;
