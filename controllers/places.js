const router = require('express').Router()

router.get('/', (req, res) => {
    let places = [{
        name: 'H-Thai-ML',
        city: 'Seattle',
        state: 'WA',
        cuisines: 'Thai, Pan-Asian',
        pic: 'http://placekitten.com/250/250'
      }, {
        name: 'Coding Cat Cafe',
        city: 'Phoenix',
        state: 'AZ',
        cuisines: 'Coffee, Bakery',
        pic: 'http://placekitten.com/250/250'
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

  let places = [{
    name: 'H-Thai-ML',
    city: 'Seattle',
    state: 'WA',
    cuisines: 'Thai, Pan-Asian',
    pic: '/images/h-thai-ml-tables.png'
  }, {
      name: 'Coding Cat Cafe',
      city: 'Phoenix',
      state: 'AZ',
      cuisines: 'Coffee, Bakery',
      pic: '/images/coffee-cat.jpg'
  }]
  
  
  

module.exports = router

