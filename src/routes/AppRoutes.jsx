import { Routes, Route } from 'react-router-dom'
import Layout from '../pages/Layout'
import Home from '../pages/Home'
import Destination from '../pages/Destination'

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path='/' element={<Home />} />
        <Route path='destination' element={<Destination />} />
      </Route>
    </Routes>
  )
}

export default AppRoutes
