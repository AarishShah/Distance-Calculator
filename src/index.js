const router = require('express').Router();
const request = require('postman-request');


router.get('/', (req,res) => {
    res.render('value')
})

router.get('/search', (req,res) => {
    
const key = 'AIzaSyBWycLnfmLyqDtuHq2TzKMmgskBkXpMtds'
const origins = req.query.origin
const destination = req.query.destination
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

            res.render('value', { word: response.body.rows[0].elements[0].distance.text })
            // res.send(response.body[0])


        }
    )
})

module.exports = router