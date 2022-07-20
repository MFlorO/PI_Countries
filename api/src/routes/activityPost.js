
const { Router } = require('express');
const { Country , Activity } = require("../db.js")


const router = Router();



router.post("/", async function (req, res) {

    try {
        const { id, name, difficulty, duration, seassion } = req.body


        const newActivity = await Activity.create({
            name: name.toLowerCase(), //El toLowerCase() Lo uso por si el usuario escribe "en mayuscula" o "minuscula"
            difficulty,
            duration,
            seassion
        })

         id.map( async i => { //El id lo mapeo porque puedo agregar varios "country" a una misma "activity"

        
            const countryFind =  await Country.findByPk(i.toUpperCase()) //El toUpperCase() Lo uso por si escribo "CFK" o "cfk"

            await countryFind.addActivity(newActivity) //Aca uno 
            
        })


        res.send("Activity created with exit")

        // res.json(newActivity)

    } catch (error) {
        res.status(400).send(error)
    }
})





module.exports = router;

