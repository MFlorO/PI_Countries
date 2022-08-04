const { Router } = require('express');
// Importar todos los routers;
const router = Router();


const getCountry = require("./getCountry.js")
const activityPost = require("./activityPost")
const countryId = require("./countryId")
const getActivity = require("./getActivity")

const activityUpdate = require("./activityUpdate")
const activityDelete = require("./activityDelete")
const activityId = require("./activityId")




// Obtener por ID
router.use("/activities", activityId);


// Obtener por ID
router.use("/countries", countryId);


// Traigo todos los countries
router.use("/countries", getCountry);


// Traigo todas las actividades
router.use("/activities", getActivity);


// Creo la actividad  en la db
router.use("/activities", activityPost);


//Update
router.use("/activities", activityUpdate);


//Delete
router.use("/activities", activityDelete);



module.exports = router;
