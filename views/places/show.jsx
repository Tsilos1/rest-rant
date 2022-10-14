const React = require('react')
const Def = require('../default')

function show (data) {
  let comments = (
    <h3 className="inactive">
      No comments yet!
    </h3>
  )
  let rating =(
    <h3 className="inactive">
      Not yet rated
      </h3>
  )
  if (data.place.comments.length) {
    let sumRatings = data.place.comments.reduce((tot, c) => {
      return tot + c.stars
    }, 0)
    let averageRating = Math.round(sumRatings / data.place.comments.length)
    let stars = ''
    for (let i = 0; i < averageRating; i++) {
      stars += '⭐'
    }
    rating = (
      <h3>
        {stars} stars
      </h3>
    )
  

    
    comments = data.place.comments.map(c => {
      return (
        <div className="border col-sm-4">
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
              <h3>
                Located in {data.place.city}, {data.place.state}
              </h3>
              </div>
              <div className="col-sm-6">
                <h1>{ data.place.name }</h1>
                <h2>{rating}</h2>
                <br></br>
                <h2>Description</h2>
                <h3> {data.place.showEstablished()}</h3>
                <br></br>
                <h4> serving  {data.place.cuisines} </h4>
                <br></br>
                <a href={`/places/${data.place.id}/edit`} className="btn btn-warning btn-lg"> Edit </a>
                <form method="POST" action={`/places/${data.place.id}?_method=DELETE`}> 
                  <button type="submit" className="btn btn-danger btn-lg"> Delete </button>
                </form>
              </div>
              </div>
              <div>
                <h1>Comments</h1>
              </div>
              <br></br>
              <h2>
                {comments}
              </h2>
              <br></br><br></br>
              <h3>Add a Comment</h3>
              <br></br>
          <form action={`/places/${data.place.id}/comment`}method="POST">
            <div className="row">
                <div className="form-group col-sm-12">
                    <label htmlFor="content">Your Comments:</label>
                    <textarea id="content" name="content" className="form-control"></textarea>
                </div>
            <div className="row">
                <div className="form-group col-sm-4 form">
                    <label htmlFor="author">Your Name:</label>
                    <input className="form-control" id="author" name="author"/>
                </div>
                <div className="form-group col-sm-4 form">
                    <label htmlFor="stars">☆Star Rating☆ 1 - 5 &nbsp; &nbsp; </label>
                    <input type="range" step="0.5" min="1" max="5" id="stars" name="stars" />
                </div> 
                <div className="form-group col-sm-4 form">
                    <label htmlFor="rant">Rant! 😡 &nbsp; &nbsp;  </label>
                    <input type="checkbox" default="unchecked" id="rant" name="rant" />
                </div>
            </div>
            <div>
              <br></br>
                  <input className="btn addPlace_btn" type="submit" value="Submit" />
            </div>
          </div>
            <br></br>
          </form>
        </main>
      </Def>
    )
}

module.exports = show

