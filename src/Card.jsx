import { useState } from 'react'
import './Card.css'

export default function Card({ name, image, species, status }) {
  const [showContent, setShowContent] = useState(false)

  return (
    <section
      className="Card"
      onMouseEnter={() => setShowContent(true)}
      onMouseLeave={() => setShowContent(false)}
    >
      {!showContent && (
        <>
          <h2>{name}</h2>
          <img src={image} alt="" className="Card__img" />
        </>
      )}
      {showContent && (
        <ul>
          <li>species: {species}</li>
          <li>status: {status}`</li>
        </ul>
      )}
    </section>
  )
}
