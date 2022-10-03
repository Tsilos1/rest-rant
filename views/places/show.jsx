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
              <br></br>
              Serves {data.place.cuisines}
            </p>
            <hr></hr>
              <h3>
                Rating
              </h3>
              <p>
                Currently Unrated
              </p>
              <h3>
              Comments
              </h3>
              No comments... Yet
              <hr></hr>
              <br></br>

                <a href={`/places/${data.id}/edit`} className="btn btn-warning"><i class="bi bi-pencil-square"></i>  Edit </a>
                
              <div>
                  <br></br>
                <form method="POST" action={`/places/${data.id}?_method=DELETE`}> 
                <button type="submit" className="btn btn-danger"> Delete </button>
                  </form>
                </div>
            </main>
          </Def>
    )
}

module.exports = show

