
const { Router } = require('express');

const { Activity, Country } = require("../../db.js")



const router = Router();


router.get("/:id", async function (req, res) {

    const { id } = req.params;

    try {


        const activitiesBD = await Activity.findOne({
            where: { id: id}, 
            include: {
                model: Country, 
                attributes: ["name"],
                through: { attributes: [] }
            }
        })
        
        res.json(activitiesBD)
        

    } catch (error) {
        res.status(404).send("Not recived id")
    }

})


module.exports = router;
