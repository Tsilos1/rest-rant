const React = require('react')
const Def = require('./default')


function error404 () {
    return (
      <Def>
          <main>
              <h1>404: PAGE NOT FOUND</h1>
              <p>Oops, sorry, we can't find this page!</p>
          </main>
          <div>
            <img src="/images/dont-panic.jpg" alt="Don't Panic" />
          </div>
          <div>
            Photo by <a href="https://unsplash.com/@thetonik_co">Tonik</a> on <a href="https://unsplash.com">Unsplash</a>
          </div>
      </Def>
    )
  }

module.exports = error404