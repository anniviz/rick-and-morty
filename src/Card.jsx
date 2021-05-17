import { useState } from 'react'
import './Card.css'

export default function Card({
  name,
  image,
  species,
  status,
  bookmarkedCharacters,
  id,
}) {
  const [showContent, setShowContent] = useState(false)

  return (
    <section className="Card" onClick={handleClick}>
      {!showContent && (
        <>
          <h2>{name}</h2>
          <img src={image} alt="" className="Card__img" />
          <button className="Card__bookmark" onClick={handleBookmarkClick}>
            ★
          </button>
        </>
      )}
      {showContent && (
        <ul>
          <li>species: {species}</li>
          <li>status: {status}</li>
        </ul>
      )}
    </section>
  )

  function handleClick() {
    setShowContent(!showContent)
  }

  function handleBookmarkClick() {
    console.log(id)
    // localStorage.setItem(
    //   'bookmarkedCharacters',
    //   JSON.stringify(bookmarkedCharacters)
    // )
  }
}
