import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  const [series, setSeries] = useState([])
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    fetch('https://api.tvmaze.com/shows')
      .then(Response => Response.json())
      .then(data => setSeries(data))
      .catch(error => console.log(error))
  }, [])

  const handleInputChange = event => {
    setSearchTerm(event.target.value)
  }

  const filterdeseries = series.filter(serie => {
    return serie.name.toLowerCase().includes(searchTerm.toLowerCase())
  })

  return (
    <>
      <div className='container'>
        <h1>Buscar Serie</h1>

        <form className='form-inline my-2 my-lg-0 w-75'>
          <input type='text' className='form-control' id='search' placeholder='Enter name' value={searchTerm} onChange={handleInputChange} />
        </form>

        <div className='row'>
          {filterdeseries.map(serie => (
            <div className='col-sm-4 mb-4' key={serie?.name}>
              <div className='card'>
                <Link to={`/shows/${serie.id}`}>
                  <img className='card-img-top' src={serie.image?.original} alt={serie.neme} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Home
