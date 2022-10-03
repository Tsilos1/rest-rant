const React = require('react')

function Def (html) {
    return (
        <html>
            <head>
                <title>Title</title>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossOrigin="anonymous" />

                <link rel="stylesheet" href="/css/style.css"/>
            </head>
            <body>
            <nav className="navbar navbar-expand-lg navbar-light bg-dark">
                <ul>
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="/places">Places</a>
                    </li>
                    <li>
                        <a href="/places/new">Add Place</a>
                    </li>
                </ul>
            </nav>
            <br></br>

                {html.children}
            <br></br>
            </body>
        </html>
    )
}

module.exports = Def
