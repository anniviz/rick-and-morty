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

  const [urlLocations, setUrlLocations] = useState(
    'https://rickandmortyapi.com/api/location'
  )
  const [locations, setLocations] = useState([])
  const [pageCounter, setPageCounter] = useState(1)
  useEffect(() => {
    fetch(urlLocations)
      .then(res => res.json())
      .then(resBody => {
        setLocations([...locations, ...resBody.results])
        pageCounter < resBody.info.pages && setPageCounter(pageCounter + 1)
      })
  }, [urlLocations])

  // useEffect(() => {
  //   setUrlLocations(
  //     `https://rickandmortyapi.com/api/location?page=${pageCounter}`
  //   )
  // }, [pageCounter])

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
          {locations.map(({ name, id, residents }) => (
            <LocationListItem key={id} name={name} residents={residents} />
          ))}
        </ul>
      )}
      {activePage === 'episodes' && (
        <ul className="App__location-container">
          {episodes.map(({ name, id }) => (
            <LocationListItem key={id} name={name} />
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
