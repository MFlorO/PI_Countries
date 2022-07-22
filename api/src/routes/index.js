const { Router } = require('express');
// Importar todos los routers;

const getCountry = require("./getCountry.js")
const activityPost = require("./activityPost")
const countryId = require("./countryId")
const activityId = require("./activityId")
const getActivities = require("./getActivities")

const activityUpdate = require("./activityUpdate")
const activityDelete = require("./activityDelete")


const router = Router();





// Obtener por ID
router.use("/countries", countryId);

// Obtener por ID
router.use("/activities", activityId);


// Traigo todos los videojuegos, ya sea de la api o mi bd
router.use("/countries", getCountry);


// Me traigo todas las actividades
router.use("/activities", getActivities);


// Creo la actividad  en la db
router.use("/activities", activityPost);


//Update
router.use("/activities", activityUpdate);


//Delete
router.use("/activities", activityDelete);



module.exports = router;
