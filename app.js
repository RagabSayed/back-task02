const geocodeurl = require('./data01/geocodeurl');
const forecast = require('./data01/forecast');

const countery = process.argv[2];
geocodeurl(countery , (error, data) => {
    console.log("Error is : ", error);
    console.log("Data is : ", data);
    
    if (data) {
        forecast(data.latitude, data.longitude, (error, data) => {
            console.log("Error is : ", error);
            console.log("Data is : ", data);
        })
    } else {
        console.log('Forecast Error is: Data entered is invalid');
        
    }
    
})