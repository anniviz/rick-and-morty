import { useState } from 'react'
import './Card.css'

export default function Card({ name, image, species, status }) {
  const [showContent, setShowContent] = useState(false)

  return (
    <section className="Card">
      <h2>{name}</h2>
      <img src={image} alt="" />
      <button onClick={handleButtonClick}>
        {showContent ? 'hide details' : 'show more'}
      </button>
      {showContent && (
        <ul>
          <li>species: {species}</li>
          <li>status: {status}</li>
        </ul>
      )}
    </section>
  )

  function handleButtonClick() {
    setShowContent(!showContent)
  }
}
