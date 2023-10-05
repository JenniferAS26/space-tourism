import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home/index.jsx'
import Destination from '../pages/Destination'
import { Technology } from '../pages/Technology/Technology'

const AppRoutes = () => {
  
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path='destination' element={<Destination />} />
      <Route path='technology' element={<Technology />} />
    </Routes>
  )
}

export default AppRoutes
