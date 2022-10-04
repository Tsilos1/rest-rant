const React = require('react')
const Def = require('./default')

function home () {
    return (
      <Def>
          <main>
              <h1>REST-Rant</h1>
          </main>
          <div>
            <img src="images/restaurant-food.jpg" alt="restaurant food" width="500px" className="text-center" />
          </div>
          <div>
            Photo by <a href="https://unsplash.com/@riaquartz">Ria Quarts</a> on <a href="https://unsplash.com">Unsplash</a>
          </div>
          <br></br>
          <a href="/places">
            <button className="btn btn-dark btn-lg">Places Page</button>
          </a>
          <br></br>
          <br></br>
      </Def>
    )
  }
  

module.exports = home