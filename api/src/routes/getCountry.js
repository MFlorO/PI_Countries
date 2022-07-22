const { Router } = require('express');
const { Country, Activity } = require("../db.js")
const axios = require('axios');
const { Op } = require('sequelize');


const router = Router();








router.get("/", async function (req, res) {

    const { name } = req.query;


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

               if(country.length > 0){

                res.json(country)

               }else{

                res.send("No existe nada con ese nombre")
               }


            } else {


                //Me traigo de la app externa los datos de country
                let countryApi = await axios.get(`https://restcountries.com/v3/all`)

                //Al usar axios. El resultado se guarda en data y despues en mi json los datos estan adentro de un array 
                //Recorro este array. 
                //Busco en mi propia db, y si no hay lo creo, el nombre del genero que estoy recorriendo. 

                countryApi.data.map(countryApi => {
                    return Country.findOrCreate({
                        where: {
                            id: countryApi.cca3,
                            name: countryApi.name.official,
                            imageFlag: countryApi.flags.map(i => {
                                return i
                            }),
                            continent: countryApi.continents,
                            capital: countryApi.capital ? countryApi.capital : ["Not have capital"],
                            subregion: countryApi.subregion ? countryApi.subregion : "",
                            area: countryApi.area,
                            population: countryApi.population
                        }
                    })
                })

                const countryDB = await Country.findAll()
                //Recorro mi base de datos con los country que cree que me traje de la api externa

                res.json(countryDB)
            }


        } catch (error) {

            res.status(404).send("Not recived name")
        }

})


module.exports = router;




