import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

const Season = () => {
  const [temporada, setTemporada] = useState(null)
  const { id } = useParams()

  useEffect(() => {
    fetch(`https://api.tvmaze.com/shows/${id}/seasons`)
      .then(Response => Response.json())
      .then(data => setTemporada(data))
      .catch(error => console.log(error))
  }, [id])

  if (!temporada) {
    return <div>Loading...</div>
  }

  return (
    <div className='container mt-3'>
      <div className='card'>
        <div className='card-header'>
          <h3>{temporada?.number}</h3>
        </div>
        <div className='card-body'>
          <div className='row'>
            <div className='col-md-8'>
              <p>{temporada?.episodeOrder}</p>
              <p>{temporada?.premiereDate}</p>
              <p>{temporada?.endDate}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Season
