import { useState, useEffect } from 'react'

const Person = () => {
  const [personajes, setPersonajes] = useState([])

  useEffect(() => {
    fetch('https://api.tvmaze.com/shows/1/cast')
      .then(Response => Response.json())
      .then(data => setPersonajes(data))
      .catch(error => console.log(error))
  }, [])

  if (!personajes) {
    return <div>Loading...</div>
  }

  return (
    <div>hpmsl</div>
  )
}
export default Person
