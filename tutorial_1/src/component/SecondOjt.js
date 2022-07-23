import React from "react"
class SecondOjt extends React.Component {
  state = {
    items: [
      { id: 1, name: 'Mone Swal' },
      { id: 2, name: 'Me' },
      { id: 3, name: 'Nga Duu' },
      { id: 4, name: 'Mystery of Burma' },
      { id: 4, name: 'Phoe Shate' },
      { id: 4, name: 'Mudra Calling' },
      { id: 4, name: 'Deception' },
    ]
  }
  render() {
    return (
      <div>
        <h1>Welcome from Movie Lists</h1>
        <ul>
          {this.state.items.map((movie, key) => {
            return (
              <li key={key}>
                {movie.name},
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}

export default SecondOjt;