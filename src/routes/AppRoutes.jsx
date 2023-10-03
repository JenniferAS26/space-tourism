import { Routes, Route } from 'react-router-dom'
//import Layout from '../pages/Layout/index'
import Home from '../pages/Home'
import Destination from '../pages/Destination'
import Crew from '../pages/Crew'

const AppRoutes = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path='destination' element={<Destination />} />
      <Route paht='crew' element={<Crew />} />
    </Routes>
  )
}

export default AppRoutes;