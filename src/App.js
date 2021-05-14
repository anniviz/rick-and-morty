import React, { useEffect, useState } from 'react'
import './App.css'
import './_global.css'
import './_variables.css'
import Card from './Card'
import Header from './Header'
import Nav from './Nav'
import LocationListItem from './LocationListItem'

export default function App() {
  const urlCharacters = 'https://rickandmortyapi.com/api/character'
  const [characters, setCharacters] = useState([])

  const urlLocations = 'https://rickandmortyapi.com/api/location'
  const [locations, setLocations] = useState([])

  useEffect(() => {
    fetch(urlCharacters)
      .then(res => res.json())
      .then(resBody => setCharacters([...characters, ...resBody.results]))
  }, [urlCharacters])

  useEffect(() => {
    fetch(urlLocations)
      .then(res => res.json())
      .then(resBody => setLocations([...locations, ...resBody.results]))
  }, [urlLocations])

  return (
    <div className="App">
      <Header />
      <div className="App__card-container hidden">
        {characters.map(({ id, name, image, species, status }) => (
          <Card
            key={id}
            name={name}
            image={image}
            species={species}
            status={status}
          ></Card>
        ))}
      </div>
      <ul className="App__location-container">
        {locations.map(({ name }) => (
          <LocationListItem name={name} />
        ))}
      </ul>
      <Nav />
    </div>
  )
}
