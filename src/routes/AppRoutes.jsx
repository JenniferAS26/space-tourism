import { Routes, Route } from 'react-router-dom'
import Layout from '../pages/Layout'
import Home from '../pages/Home'
import DestinationTitan from '../pages/DestinationTitan'

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path='/' element={<Home />} />
        <Route path='/destination-titan' element={<DestinationTitan />} />
        <Route path='destination' />
      </Route>
    </Routes>
  )
}

export default AppRoutes
