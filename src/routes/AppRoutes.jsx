import { Routes, Route } from 'react-router-dom'
import Crew from '../pages/Crew'
import Home from '../pages/Home/index.jsx'
import Destination from '../pages/Destination'
import TechBackup from '../pages/TechBackup'
// import { Technology } from '../pages/Technology/Technology'

const AppRoutes = () => {
  
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path='destination' element={<Destination />} />
      <Route path='crew' element={<Crew />} />
      <Route path='technology' element={<TechBackup />} />
    </Routes>
  )
}

export default AppRoutes;