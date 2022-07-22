const { Router } = require('express');
const { Activity } = require("../db.js")
// const axios = require('axios');


const router = Router();






router.get("/", async function (req, res) {

    try {
      
        const genresDB = await Activity.findAll() //Recorro mi base de dato con las actividades que cree 

        res.json(genresDB)

    } catch (error) {
        res.status(404).send("Failed to find activities")
    }
})



module.exports = router;

