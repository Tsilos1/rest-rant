const React = require('react')
const Def = require('../default')

function show (data) {
    return (
        <Def>
          <main>
            <br></br>
            <h1>{ data.place.name }</h1>
            <p>
              <img src={data.place.pic}></img>
            </p>
            <p className="text-center"> Located in &nbsp; 
              {data.place.city}, {data.place.state}
              <br></br>Serves {data.place.cuisines}
            </p>
            <hr></hr>
            <h2>
              Rating:
            </h2>
            <p>
              Not Rated
            </p>
            <hr></hr>
            <h2>
              Comments:
            </h2>
            <p>
              No comments
            </p>
            <a href="" className="btn btn-warning"> Edit </a> 

          </main>
        </Def>
    )
}

module.exports = show

