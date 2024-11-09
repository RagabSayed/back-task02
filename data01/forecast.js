const request = require('request')



const forecast = (latitude, longitude, callback) => {
    const weatherURL = "http://api.weatherapi.com/v1/current.json?key=e11f50d3793446f395a112138243110&q=" + latitude + "," + longitude;
    request({url: weatherURL, json: true}, (error, response) => {
        if (error) {
            callback("Unable to connect to weather API server", undefined)
        } else if (response.body.error) {
            callback(response.body.error.message, undefined)
        } else {
            callback(undefined, response.body.location.name + " it is: " 
            + response.body.current.condition.text + " temprture is : " + response.body.current.temp_c);
        }
    })
}

module.exports = forecast