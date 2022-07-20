
const { Router } = require('express');
const { Activity } = require("../db.js")


const router = Router();






router.delete("/:id", async function (req, res) {

    const { id } = req.params;

    try {
        if (id) {

            await Activity.destroy({
                    where: { id: id }
                }
            );

            res.json(Activity);

        } else {
            res.status(404).send("Not recived id")
        }
    } catch (error) {
    res.send("The data cannot be deleted");
 }

})




module.exports = router;
