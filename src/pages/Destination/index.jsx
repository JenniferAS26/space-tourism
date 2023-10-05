import { useState } from 'react'
// import Header from '../../components/Header'
import DestinationLayout from '../../components/DestinationLayout'
import moon from '../../assets/destination/image-moon.webp'
import mars from '../../assets/destination/image-mars.webp'
import europa from '../../assets/destination/image-europa.webp'
import titan from '../../assets/destination/image-titan.webp'
import { destination } from '../../resources'
import './styles.scss'

const Destination = () => {
  const [choosePlanet, setChoosePlanet] = useState('moon')

  const changeImage = () => {
    if (choosePlanet ==='moon') {
      return (
        <div className='w-full h-full m-auto'>
          <img src={moon} alt="moon image" />
        </div>
      )
    } else if (choosePlanet ==='mars') {
      return (
        <div className='w-full h-full m-auto'>
          <img src={mars} alt="planet mars image" />
        </div>
      )
    } else if (choosePlanet ==='europa') {
      return (
        <div className='w-full h-full m-auto'>
          <img src={europa} alt="moon Europa image" />
        </div>
      )
    } else if (choosePlanet ==='titan') {
      return (
        <div className='w-full h-full m-auto'>
          <img src={titan} alt="moon Titan image" />
        </div>
      )
    }
  }

  const changePlanetInfo = () => {
    if (choosePlanet ==='moon') {
      return (
        <div className='w-full h-full'>
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
        <div className='w-full h-full'>
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
        <div className='w-full h-full'>
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
        <div className='w-full h-full'>
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
      {/* <Header /> */}
      <div className='destination__planet-container'>
        <h2 className='destination__planet-container--title'><span>01</span> PICK YOUR DESTINATION</h2>
        <div className='destination__planet-container--content'>
          <div className='image'>
            {changeImage()}
          </div>
          <div className="wrapper w-full h-full">
            <nav className='m-auto lg:ml-[200px]'>
              <ul className='flex justify-evenly'>
                <li
                  className='underline-animation cursor-pointer'
                  onClick={() => setChoosePlanet('moon')}
                >
                  {destination.moon.name}
                </li>
                <li
                  className='underline-animation cursor-pointer'
                  onClick={() => setChoosePlanet('mars')}
                >
                  {destination.mars.name}
                </li>
                <li
                  className='underline-animation cursor-pointer'
                  onClick={() => setChoosePlanet('europa')}
                >
                  {destination.europa.name}
                </li>
                <li
                  className='underline-animation cursor-pointer'
                  onClick={() => setChoosePlanet('titan')}
                >
                  {destination.titan.name}
                </li>
              </ul>
            </nav>
            <div className='information w-full h-full'>
              {changePlanetInfo()}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Destination
