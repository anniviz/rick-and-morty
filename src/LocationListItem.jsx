import { useEffect, useState } from 'react'
import './LocationListItem.css'

export default function LocationListItem({ name, residents }) {
  const [locationCharacters, setLocationCharacters] = useState([])
  useEffect(() => {
    residents[0] &&
      fetch(residents[0])
        .then(res => res.json())
        .then(resBody =>
          setLocationCharacters([...locationCharacters, resBody])
        )
  }, [])
  console.log(residents[0])
  console.log(locationCharacters)
  return <li className="LocationListItem">{name}</li>
}
