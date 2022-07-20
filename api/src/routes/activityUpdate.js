
const { Router } = require('express');

const { Country, Activity } = require("../db.js")



const router = Router();




router.put("/", async function (req, res) {

    const {id, name, difficulty, duration, seassion} = req.body;

    try {
        if (id || name || difficulty || duration || seassion) {

            await Activity.update({
                name: name,
                difficulty: difficulty,
                duration: duration,
                seassion: seassion
            },
                {
                    where: { id: id }
                }
            );

            res.send("Modified Activity");
        } else {
            res.status(404).send("Not recived data")
        }
    } catch (error) {
    res.send(error);
}


})


module.exports = router;

