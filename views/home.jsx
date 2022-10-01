const React = require('react')
const Def = require('./default')

function home () {
    return (
      <Def>
          <main>
              <h1>REST-Rant</h1>
          </main>
          <div>
            <img src="images/restaurant-food.jpg" alt="restaurant food" />
          </div>
          <div>
            Photo by <a href="https://unsplash.com/@riaquartz">Ria Quarts</a> on <a href="https://unsplash.com">Unsplash</a>
          </div>
          <a href="/places">
            <button className="btn-primary">Places Page</button>
          </a>
          <a href="/places/index"> 
            <button className="btn-primary">Index</button>

          </a>

      </Def>
    )
  }
  

module.exports = home