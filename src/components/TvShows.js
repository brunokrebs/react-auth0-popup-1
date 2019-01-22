import React, { useState, useEffect } from 'react'
import './styles.css'

function TvShows() {
  // Note that shows is similar to this.state; setShows is similar to this.setState. The third part, useState is to be our initial state value
  const [shows, setShows] = useState([])

  // Now, let's use useEffect instead of componentDidMount
  useEffect(() => {
    fetch('http://localhost:3005/api/data/tvShows')
      .then(response => response.json())
      .then(data => {
        setShows(data)
      })
  }, [])

  return (
    <div>
      <h1>TV SHOWS</h1>
      {shows.map(shows => (
        <div className="card" key={shows.id}>
          <h3>{shows.name}</h3>
          <h5>{shows.airDate}</h5>
        </div>
      ))}
    </div>
  )
}

export default TvShows
