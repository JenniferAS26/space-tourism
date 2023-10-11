import { useEffect, useState } from 'react'
import Header from '../../components/Header'
import data from '../../data/data.json'
import './styles.scss'

const TechBackup = () => {
  const technologies = data.technology
  console.log(technologies)
  const [value, setValue] = useState(0)
  const { name, images, description } = technologies[value]

  const [windowSize, setwindowSize] = useState(window.innerWidth)
  useEffect(() => {
    window.addEventListener('resize', () => {
      setwindowSize(window.innerWidth)
    })
  }, [])

  return (
    <section className='technology'>
      <Header />
      <div className='technology__content-container'>
        <h2 className='technology__content-container--title'><span>03</span> SPACE LAUNCH 101</h2>
        <div className='technology__content-container--dynamic-content'>
          <img 
            className='image' 
            src={windowSize > 1440 ? images.portrait : images.landscape} 
            alt={name} 
          />
          <div className='information'>
            <div className='information__buttons-container'>
              {
                technologies.map((item, index) => (
                  <button
                    key={index}
                    className='information__buttons-container--button'
                    onClick={() => setValue(index)}
                    style={{
                      backgroundColor: index === value ? 'white' : 'transparent',
                      color: index === value ? '#0B0D17' : 'white'
                    }}
                  >
                    {index + 1}
                  </button>
                ))
              }
            </div>
            <div className='information__content'>
              <h4 className='information__content--title'>The terminology...</h4>
              <h2 className='information__content--name'>{name}</h2>
              <p className='information__content--description'>{description}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TechBackup
