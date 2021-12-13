const path = require('path')
const express = require('express')
const hbs = require('hbs')
const { title } = require('process')

const app = express()

// Define paths for Express configuration
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

// Setup handlebars engine and views location (instead of .html)
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

// Setup static directory location 
app.use(express.static(publicDirectoryPath))

app.get('', (req, res) =>{
    res.render('index', {
        title: 'Weather App',
        name: 'Imaad'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About me',
        name: 'Imaad'
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        title: 'Help Section',
        name: 'Imaad Irshad'
    })
})

app.get('/weather', (req, res) =>{
     res.send( {
         forecast: 'It is windy',
         location: 'Dubai'
     })
 })

 app.get('/help/*', (req, res) => {
    res.render('404', {
        title: '404',
        name: 'Imaad Irshad',
        errorMessage: 'Help article not found.'
    })
})

app.get('*', (req, res) => {
    res.render('404', {
        title: '404',
        name: 'Imaad Irshad',
        errorMessage: 'Page not found.'
    })
})

app.listen(3000), () => {
    console.log("Server is up on port 3000")
 }