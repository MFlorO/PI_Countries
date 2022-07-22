
const { Router } = require('express');

const { Activity } = require("../db.js")



const router = Router();


router.get("/:id", async function (req, res) {

    const { id } = req.params;

    try {


        const countryBD = await Activity.findByPk(id)
        

        res.json(countryBD)



    } catch (error) {
        res.status(404).send("Not recived id")
    }

})


module.exports = router;
