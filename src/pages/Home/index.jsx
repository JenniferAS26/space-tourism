import { Link } from 'react-router-dom';
import Header from '../../components/Header'
import './styles.scss'

const Home = () => {
  return (
  <div className='home-wraper'>
    <Header/>
    <section className='home'>
      <article className='home-article'>
        <h1 className='title'>
          So, you want to travel to 
          <span className='title-em'>Space</span>
        </h1>
        <p className='paragraph'>
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </article>
      <div>
        <Link to='/destination'>
      <button className='explore-btn'>
          Explore
      </button>
        </Link>
      </div>
        
    </section>
  </div>
  )
}

export default Home
