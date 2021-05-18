import { useEffect, useState } from 'react'
import Card from './Card'
import './LocationListItem.css'

export default function LocationListItem({ name, residents }) {
  const [locationCharacters, setLocationCharacters] = useState([])
  const [showCharacters, setShowCharacters] = useState(false)

  useEffect(() => {
    const promises = residents.map(character =>
      fetch(character).then(res => res.json())
    )
    Promise.all(promises).then(res => setLocationCharacters([...res]))
  }, [residents])

  return (
    <>
      <li className="LocationListItem" onClick={handleListItemClick}>
        {name}
      </li>
      {showCharacters &&
        locationCharacters.map(({ id, name, image, species, status }) => (
          <Card
            key={id}
            name={name}
            image={image}
            species={species}
            status={status}
          ></Card>
        ))}
    </>
  )

  function handleListItemClick() {
    setShowCharacters(!showCharacters)
    console.log('click')
  }
}
