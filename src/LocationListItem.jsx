import { useEffect, useState } from 'react'
import './LocationListItem.css'

export default function LocationListItem({ name, residents }) {
  const [urlLocationCharacter, setUrlLocationCharacter] = useState(residents[0])
  const [locationCharacters, setLocationCharacters] = useState([])
  const [characterCounter, setCharacterCounter] = useState(1)
  useEffect(() => {
    urlLocationCharacter &&
      fetch(urlLocationCharacter)
        .then(res => res.json())
        .then(resBody => {
          setLocationCharacters([...locationCharacters, resBody])
          characterCounter < residents.length &&
            setCharacterCounter(characterCounter + 1)
        })
  }, [])

  // useEffect(() => {
  //   setUrlLocationCharacter(residents[characterCounter])
  // }, [characterCounter])

  console.log(urlLocationCharacter)
  console.log(locationCharacters)
  return <li className="LocationListItem">{name}</li>
}
