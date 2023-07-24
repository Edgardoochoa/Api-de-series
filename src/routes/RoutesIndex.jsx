import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import SerieDetail from '../pages/SerieDetail'
import Season from '../pages/Season'

const RoutesIndex = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/shows/:id' element={<SerieDetail />} />
      <Route path='/shows/:id/season' element={<Season />} />
    </Routes>
  )
}

export default RoutesIndex
