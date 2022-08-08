const { Router } = require('express');
const { Country, Activity } = require("../db.js")

const router = Router();






router.put("/", async function (req, res) {

const { activityId, countryId, id, name, difficulty, duration, seassion } = req.body;

try {
    if (activityId || countryId || id || name || difficulty || duration || seassion) {

        await Activity.update({
            name: name.toLowerCase(),
            difficulty: difficulty,
            duration: duration,
            seassion: seassion
        },
            {
                where: { id: id }  //id igual a activityId?
            }
        );

        // ######### HASTA ACA ME MODIFICA LOS DATOS PERO NO ME AGREGA PAIS ##########

        
        const activity = await Activity.findByPk(activityId);       


        countryId.map(async c => {

            const countryFind = await Country.findByPk(c.toUpperCase())


            // await activity.setCountrys([countryFind])

            await activity.addCountry([countryFind]) //Me agrega los country pero no me setea si ya hay uno antes      
        })


         // ######### HASTA ACA ME AGREGA PAIS ##########


        res.send("Modified Activity");


    } else {

        res.status(404).send("Not recived data")
    }

  } catch (error) {
    res.send(error);
  }
})






module.exports = router;

