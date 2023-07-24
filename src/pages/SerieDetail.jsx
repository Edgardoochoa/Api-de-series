import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'

const SerieDetail = () => {
  const [serie, setSerie] = useState(null)
  const { id } = useParams()

  useEffect(() => {
    fetch(`https://api.tvmaze.com/shows/${id}`)
      .then(Response => Response.json())
      .then(data => setSerie(data))
      .catch(error => console.log(error))
  }, [id])

  if (!serie) {
    return <div>Loading...</div>
  }

  return (
    <div className='container mt-3'>
      <div className='card'>
        <div className='card-header'>
          <h3>{serie?.name}</h3>
        </div>
        <div className='card-body'>
          <div className='row'>
            <div className='col-md-4'>
              <img src={serie.image?.original} alt={serie?.name} className='img-fluid' />
            </div>
            <div className='col-md-8'>
              <p>{serie?.summary}</p>
              <p>{serie?.genres}</p>
              <p>{serie?.genres}</p>
              <p>{serie?.premiered}</p>
              <Link to={`/shows/${serie.id}/season`}>
                <button>Ver Serie</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default SerieDetail
