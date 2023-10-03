import { Outlet } from 'react-router-dom'
import Header from '../../components/Header'


const Layout = () => {
  return (
    <section className='layout'>
      <Header />
      <Outlet />
    </section>
  )
}

export default Layout
