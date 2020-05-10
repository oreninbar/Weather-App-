const express = require('express')
const router = express.Router()
const axios = require('axios')
const City = require('../../model/City.js')
const apiKey = "c44198a7c2a2103cd137d8dbb71c63bf";

//returns json with all the cities
router.get('/cities', async (req, res) => {
    let cities = await City.find({})
    res.send(cities)
})

//geta the weather according to the api
const getWeather = async function (url) {
    try {
        let result = await axios.get(url);
        return result.data;
    } catch (error) {
        console.log(error);
    }
};

//gets a city by name 
router.get(`/city/:cityName`, async (req, res) => {
    let { cityName } = req.params;
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;
    let data = await getWeather(url);
    data = {
        name: data.name,
        temperature: Math.round(data.main.temp),
        condition: data.weather[0].description,
        conditionPic: `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
    };
    res.send(data);
});

//post city 
router.post('/city', async (req, res) => {
    let city = new City(req.body)
    await city.save()
    City.find({}, (err, city) => {
        res.send(city)
    })
})

//delete a city by name
router.delete('/city/:cityName', async (req, res) => {
    let cityName = req.params.cityName
    try {
        await City.findOneAndDelete({ name: `${cityName}` })
    } catch (error) {
        console.log(error);
        res.send(`problem to delete ,${cityName} wasn't deleted`)
    }
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