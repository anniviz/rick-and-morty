import React, { useEffect, useState } from 'react'
import './App.css'
import './_variables.css'
import Card from './Card'
import Header from './Header'
import Nav from './Nav'

export default function App() {
  const [characters, setCharacters] = useState([])
  const [url, setUrl] = useState('https://rickandmortyapi.com/api/character')

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(resBody => setCharacters([...characters, ...resBody.results]))
  }, [url])

  return (
    <div className="App">
      <Header />
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
      <Nav />
    </div>
  )
}
