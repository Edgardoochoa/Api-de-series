import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const About = () => {
  const [capitulos, setCapitulos] = useState([])

  useEffect(() => {
    fetch('https://api.tvmaze.com/shows/1/episodes')
      .then(Response => Response.json())
      .then(data => setCapitulos(data))
      .catch(error => console.log(error))
  }, [])

  const filterdecapitulos = capitulos.filter(capitulo => {
    return capitulo.name.toLowerCase()
  })

  return (

    <div className='container'>

      <div className='row'>
        {filterdecapitulos.map(capitulo => (
          <div className='col-sm-4 mb-4' key={capitulo?.name}>
            <div className='card'>
              <Link to={`/shows/${capitulo.id}`}>
                <img className='card-img-top' src={capitulo.image?.original} alt={capitulo.neme} />
              </Link>
              <p>{capitulo?.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>

  )
}

export default About
