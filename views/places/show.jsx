const React = require('react')
const Def = require('../default')

function show (data) {
  let comments = (
    <h3 className="inactive">
      No comments yet!
    </h3>
  )
  if (data.place.comments.length) {
    comments = data.place.comments.map(c => {
      return (
        <div className="border">
          <h2 className="rant">{c.rant ? 'Rant!' : 'Rave!'}</h2>
          <h4>{c.content}</h4>
          <h3>
            <stong>- {c.author}</stong>
          </h3>
          <h4>Rating: {c.stars}</h4>
        </div>
      )
    })
  }


    return (
        <Def>
          <main>
            <br></br>
            <div className="row">
              <div className="col-sm-6">
              <img src={data.place.pic}></img>

            
                <h1>{ data.place.name }</h1>
                <h3>
                Located in {data.place.city}, {data.place.state}
                </h3>
                </div>

                <div className="col-sm-6">
                <h3>
                Rating
              </h3>
              <p>
                Currently Unrated
              </p> 
              <br></br>
                <h2>Description</h2>
                <h3>
                  {data.place.showEstablished()}
                </h3>
                <h4>
                  serving {data.place.cuisines}
                </h4>
                <div>
                <a href={`/places/${data.id}/edit`} className="btn btn-warning btn-lg"> Edit </a>
                <form method="POST" action={`/places/${data.id}?_method=DELETE`}> 
                <br></br>
                <button type="submit" className="btn btn-danger btn-lg">
                Delete </button>
                  </form>
                </div>
              </div>
            </div>
              <hr></hr>
              <h2>
                {comments}
              </h2>       
              
            </main>
          </Def>
    )
}

module.exports = show

