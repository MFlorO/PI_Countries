
const { Router } = require('express');
const { Activity } = require("../../db.js")


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
            res.status(404).json({msg:"Not recived id"})
        }
    } catch (error) {
        console.log(error)
    res.send({msg:"The data cannot be deleted"});
 }

})




module.exports = router;
