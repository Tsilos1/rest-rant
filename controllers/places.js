const router = require('express').Router()
const places = require('../models/places.js')

router.get('/', (req, res) => {
      res.render('places/index', { places })

    })

    // http://localhost:3000/places/new
router.get('/new', (req, res) => {
  res.render('places/new')
})

 // http://localhost:3000/places/1   
router.get('/:id', (req, res) => {
  res.send('places/:id')
})



// What is this code?

// 3. Important! Take a moment to look at the order of your routes. Make sure your route for GET /places/new is ABOVE the route for GET /places/:id in the places controller.

  router.post('/', (req, res) => {
    console.log(req.body)
    if (!req.body.pic) {
      // Default image if one is not provided
      req.body.pic = 'http://placekitten.com/400/400'
    }
    if (!req.body.city) {
      req.body.city = 'Anytown'
    }
    if (!req.body.state) {
      req.body.state = 'USA'
    }
    places.push(req.body)
    res.redirect('/places')
  })

module.exports = router

