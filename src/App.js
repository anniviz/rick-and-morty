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
  useEffect(() => {
    fetch(urlCharacters)
      .then(res => res.json())
      .then(resBody => setCharacters([...resBody.results]))
  }, [urlCharacters])

  const urlLocations = 'https://rickandmortyapi.com/api/location'
  const [locations, setLocations] = useState([])
  useEffect(() => {
    fetch(urlLocations)
      .then(res => res.json())
      .then(resBody => setLocations([...resBody.results]))
  }, [urlLocations])

  const urlEpisodes = 'https://rickandmortyapi.com/api/episode'
  const [episodes, setEpisodes] = useState([])
  useEffect(() => {
    fetch(urlEpisodes)
      .then(res => res.json())
      .then(resBody => setEpisodes([...resBody.results]))
  }, [urlEpisodes])

  const navItems = ['characters', 'locations', 'episodes']
  const [activePage, setActivePage] = useState('characters')

  return (
    <div className="App">
      <Header />
      {activePage === 'characters' && (
        <div className="App__card-container">
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
      )}
      {activePage === 'locations' && (
        <ul className="App__location-container">
          {locations.map(({ name }) => (
            <LocationListItem key={name} name={name} />
          ))}
        </ul>
      )}
      {activePage === 'episodes' && (
        <ul className="App__location-container">
          {episodes.map(({ name }) => (
            <LocationListItem key={name} name={name} />
          ))}
        </ul>
      )}
      <Nav
        activePage={activePage}
        navItems={navItems}
        setActivePage={setActivePage}
      />
    </div>
  )
}
