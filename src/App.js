import React, { useEffect, useState } from 'react'
import './App.css'

export default function App() {
  const [characters, setCharacters] = useState([])
  const [url, setUrl] = useState('https://rickandmortyapi.com/api/character')

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(resBody => setCharacters([...characters, resBody.results]))
  }, [url])

  console.log(characters)

  return <div className="App"></div>
}
