const { Router } = require('express');
// Importar todos los routers;

const getCountry = require("./getCountry.js")
const activityPost = require("./activityPost")
const countryId = require("./countryId")
const activityUpdate = require("./activityUpdate")


const router = Router();




// Obtener por ID
router.use("/countries", countryId);


//Traigo todos los videojuegos, ya sea de la api o mi bd
router.use("/countries", getCountry);

// Creo la actividad  en la db
router.use("/activities", activityPost);


//Update
router.use("/activities", activityUpdate);



module.exports = router;
