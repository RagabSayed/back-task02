const request = require('request');

const geocodeurl = (countery, callback) => {
    const geourl = "https://api.mapbox.com/search/geocode/v6/forward?q=" + countery + "&proximity=ip&access_token=pk.eyJ1Ijoici1zYXllZDI2IiwiYSI6ImNtMng5OWVxcDAyazgyanM2MWJjMGpmZWEifQ.li0ESDU6oSVeUrgw152Kqw";
    request({url: geourl, json: true}, (error, response) => {
        if (error) {
            callback("Unable to connect to geocode API server", undefined)
        } else if (response.body.message) {
            callback(response.body.message, undefined)
        } else if (response.body.features.length === 0) {
            callback("The cuntery name is not found", undefined)
        } else {
            callback(undefined, {
                latitude: response.body.features[0].geometry.coordinates[1],
                longtude: response.body.features[0].geometry.coordinates[0]
            })
        }
    })
}

module.exports = geocodeurl