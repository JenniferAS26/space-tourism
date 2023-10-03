import { useState } from 'react'
import Header from '../../components/Header'
import DestinationLayout from '../../components/DestinationLayout'
import moon from '../../assets/destination/image-moon.png'
import mars from '../../assets/destination/image-mars.png'
import europa from '../../assets/destination/image-europa.png'
import titan from '../../assets/destination/image-titan.png'
import { destination } from '../../resources'
import './styles.scss'

const Destination = () => {
  const [choosePlanet, setChoosePlanet] = useState('moon')

  const changeImage = () => {
    if (choosePlanet ==='moon') {
      return (
        <div>
          <img src={moon} alt="" />
        </div>
      )
    } else if (choosePlanet ==='mars') {
      return (
        <div>
          <img src={mars} alt="" />
        </div>
      )
    } else if (choosePlanet ==='europa') {
      return (
        <div>
          <img src={europa} alt="" />
        </div>
      )
    } else if (choosePlanet ==='titan') {
      return (
        <div>
          <img src={titan} alt="" />
        </div>
      )
    }
  }

  const changePlanetInfo = () => {
    if (choosePlanet ==='moon') {
      return (
        <div>
          <DestinationLayout 
            name={destination.moon.name}
            description={destination.moon.description}
            distance={destination.moon.distance}
            travel={destination.moon.timeTravel}
          />
        </div>
      )
    } else if (choosePlanet ==='mars') {
      return (
        <div>
          <DestinationLayout 
            name={destination.mars.name}
            description={destination.mars.description}
            distance={destination.mars.distance}
            travel={destination.mars.timeTravel}
          />
        </div>
      )
    } else if (choosePlanet ==='europa') {
      return (
        <div>
          <DestinationLayout 
            name={destination.europa.name}
            description={destination.europa.description}
            distance={destination.europa.distance}
            travel={destination.europa.timeTravel}
          />
        </div>
      )
    } else if (choosePlanet ==='titan') {
      return (
        <div>
          <DestinationLayout 
            name={destination.titan.name}
            description={destination.titan.description}
            distance={destination.titan.distance}
            travel={destination.titan.timeTravel}
          />
        </div>
      )
    }
  }

  return (
    <section className='destination w-full h-full'>
      <Header />
      <div className='destination__planet-container'>
        <h2 className='destination__planet-container--title'><span>01</span> PICK YOUR DESTINATION</h2>
        <div className='destination__planet-container--content'>
          <div className='image'>
            {changeImage()}
          </div>
          <nav className='lg:ml-[200px]'>
            <ul className='flex justify-center lg:justify-start py-2'>
              <li 
                className='cursor-pointer'
                onClick={() => setChoosePlanet('moon')}
              >
                {destination.moon.name}
              </li>
              <li 
                className='cursor-pointer'
                onClick={() => setChoosePlanet('mars')}
              >
                {destination.mars.name}
              </li>
              <li 
                className='cursor-pointer'
                onClick={() => setChoosePlanet('europa')}
              >
                {destination.europa.name}
              </li>
              <li 
                className='cursor-pointer'
                onClick={() => setChoosePlanet('titan')}
              >
                {destination.titan.name}
              </li>
            </ul>
          </nav>
          <div>
            {changePlanetInfo()}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Destination
