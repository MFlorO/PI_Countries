
const { Router } = require('express');

const { Country, Activity } = require("../db.js")

const router = Router();






router.get("/:id", async function (req, res) {

    const { id } = req.params;


    try {

        const countryBD = await Country.findOne({
            where: { id:id.toUpperCase() }, //El toUpperCase() Lo uso por si escribo "CFK" o "cfk"
            include: {
                model: Activity, 
                attributes: ['id',"name","difficulty", "duration", "seassion"],
                through: { attributes: [] }
            }
        })

        res.json(countryBD)


    } catch (error) {
        res.status(404).send("Not recived id")
    }
})






module.exports = router;

