const request = require("request")

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=23b52544951b7e786c2473d10d792435&query=' + latitude + ',' + longitude + '&units=m' 

    request ({url, json: true}, (error, {body}) => {
        if (error) {
            callback('Unable to connect, check internet connection', undefined)
        } else if (body.error) {
            callback('Unable to get coordinate information, please verify input', undefined)
       } else {
            callback(undefined, body.current.weather_descriptions[0] + '. It is currently ' +body.current.temperature + ' degrees out.' + ' It feels like ' + body.current.feelslike + ' degrees.')
       }

    })
}

module.exports = forecast