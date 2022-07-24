const { Router } = require('express');
const { Country, Activity } = require("../db.js")
const axios = require('axios');
const { Op } = require('sequelize');


const router = Router();



async function crearRegistro() {

    const allCountries = await axios.get(`https://restcountries.com/v3/all`)


    const countriesMap = await allCountries.data.map(c => {
        return {
            id: c.cca3,
            name: c.name.official,
            imageFlag: c.flags,
            continent: c.continents,
            capital: c.capital ? c.capital : ["Not have capital"],
            subregion: c.subregion ? c.subregion : "",
            area: c.area,
            population: c.population
        }
    })


    return countriesMap

}




router.get("/", async function (req, res) {

    const { name } = req.query;
    const dbLength = await Country.count();  //".count()" --> ME dice si hay datos en esa tabla "Country"

    if (!dbLength) {  

        const countries = await crearRegistro() //LLamo a la funcion
        // console.log(countries)
        await Country.bulkCreate(countries); // ACA CREO POR PRIMERA VEZ MI BD con la llamda en la api

      
    }


    try {
        if (name) {


            const country = await Country.findAll({
                include: {
                    model: Activity,
                    attributes: ['id', "name", "difficulty", "duration", "seassion"],
                    through: { attributes: [] }
                },
                where: {
                    name: {
                        [Op.iLike]: `%${name}%`
                    }
                }
            })

            if (country.length > 0) {

                res.json(country)

            } else {

                res.json({ msg: "No existe pais con ese nombre" })
            }


        } else {

            const countryDB = await Country.findAll({
                include: {
                    model: Activity,
                    attributes: ['id', "name", "difficulty", "duration", "seassion"],
                    through: { attributes: [] }
                }
            })

            //Recorro mi base de datos con los country que cree que me traje de la api externa

            res.json(countryDB)

        }

    } catch (error) {

        res.status(404).json(error)
    }

})


module.exports = router;




