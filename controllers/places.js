const router = require('express').Router()
const places = require('../models/places.js')

router.get('/', (req, res) => {
    let places = [{
        name: 'H-Thai-ML',
        city: 'Seattle',
        state: 'WA',
        cuisines: 'Thai, Pan-Asian',
        pic: '/images/thai.jpg'
      }, {
        name: 'Coding Cat Cafe',
        city: 'Phoenix',
        state: 'AZ',
        cuisines: 'Coffee, Bakery',
        pic: '/images/coffee.jpg'
      }]
      
      res.render('places/index', { places })

})

router.get('/new', (req, res) => {
    res.render('places/new')
  })

// router.get(/) => {
//   res.send('places/:id')
// }  What is this code?

// 3. Important! Take a moment to look at the order of your routes. Make sure your route for GET /places/new is ABOVE the route for GET /places/:id in the places controller.

router.post('/', (req, res) => {
    console.log(req.body)
    res.send('POST /places')
  })

  // router.post('/', (req, res) => {
  //   console.log(req.body)
  //   if (!req.body.pic) {
  //     // Default image if one is not provided
  //     req.body.pic = 'http://placekitten.com/400/400'
  //   }
  //   if (!req.body.city) {
  //     req.body.city = 'Anytown'
  //   }
  //   if (!req.body.state) {
  //     req.body.state = 'USA'
  //   }
  //   places.push(req.body)
  //   res.redirect('/places')
  // })
  

  
  
  

module.exports = router

