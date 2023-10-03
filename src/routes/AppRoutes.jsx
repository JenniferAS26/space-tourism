import { Routes, Route } from 'react-router-dom'
import App from '../components/App'

const AppRoutes = () => {
  return (
    <Routes>
      <Route index element={<App />} />
      <Route crew element={<crew />} />
    </Routes>
  )
}

export default AppRoutes
