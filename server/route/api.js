const express = require('express')
const router = express.Router()
const axios = require('axios')


router.get(`/city/:cityName`, async (req, res) => {
    const { cityName } = req.params
    await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=c44198a7c2a2103cd137d8dbb71c63bf`)
        .then(function (response) {
            res.send(response.data)
            console.log(response.data);
        })
        .catch(function (error) {
            console.log(error);
        })
        .finally(function () {
            console.log('enter to finally');
        });
})


module.exports = router



/*
    await $.ajax({
        method: "GET",
        url: `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=c44198a7c2a2103cd137d8dbb71c63bf`,
        success: (data) => {
            res.send(data)
        },
        error: (xhr, text, error) => {
            console.log(error);
        }
    })

*/