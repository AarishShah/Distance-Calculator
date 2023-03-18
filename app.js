const express = require('express') //test
const request = require('postman-request');
const hbs = require('hbs')
const path = require('')

const app = express()

app.get('/', (req, res) =>
{
    res.render('index')
})

//setup views location and  handlebars engine 
app.set('views', path.join(__dirname, './templates/views'))
app.set('view engine', 'hbs')

const key = 'AIzaSyBWycLnfmLyqDtuHq2TzKMmgskBkXpMtds'
const origins = '190001'
const destination = '180001'
const url = 'https://maps.googleapis.com/maps/api/distancematrix/json?origins=' + origins + '&destinations=' + destination + '&key=' + key;



request
    (
        { url: url, json: true },

        (error, response) =>
        {
            if (error) // means no response
                console.log('Unable to connect to service!');

            // else if (query === '')
            //     console.log('No item entered');

            // else if (response.body.length === 0) // occurs when query is empty or when item entered is not available in db eg. Harisa, Compueter.
            //     console.log('This item is not present in the database');

            else console.log(response.body.rows[0].elements[0].distance.text)

            res.render('index', { destination: response.body.rows[0].elements[0].distance.text })
            // res.send(response.body[0])


        }
    )
app.listen(3000, () => { console.log('Server is up on port 3000.') })