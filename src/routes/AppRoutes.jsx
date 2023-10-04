import { Routes, Route } from 'react-router-dom'
//import Layout from '../pages/Layout'
//import Home from '../pages/Home'
//import Destination from '../pages/Destination'
import Crew from '../pages/Crew/Crew'
import Layout from '../pages/Layout'
import Home from '../pages/Home'
import Destination from '../pages/Destination'

const AppRoutes = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path='destination' element={<Destination />} />
      <Route path='crew' element={<Crew />} />
    </Routes>
  )
}

export default AppRoutes;