import { useState } from 'react'
import Header from '../../components/Header'
import { technology } from '../../resources'
import oneLandscape from '../../assets/technology/image-launch-vehicle-landscape.jpg'
import onePortrait from '../../assets/technology/image-launch-vehicle-portrait.jpg'
import twoLandscape from '../../assets/technology/image-spaceport-landscape.jpg'
import twoPortrait from '../../assets/technology/image-spaceport-portrait.jpg'
import threeLandscape from '../../assets/technology/image-space-capsule-landscape.jpg'
import threePortrait from '../../assets/technology/image-space-capsule-portrait.jpg'
import './styles.scss'
import TechBackupLayout from '../../components/TechBackupLayout'

const TechBackup = () => {
  const [chooseTech, setChooseTech] = useState('one')
  const changeImage = () => {
    if (chooseTech === 'one') {
      return (
        <div>
          <img className='block lg:hidden' src={oneLandscape} alt='spacecraft picture' />
          <img className='hidden lg:block' src={onePortrait} alt='spacecraft picture' />
        </div>
      )
    } else if (chooseTech === 'two') {
      return (
        <div>
          <img className='block lg:hidden' src={twoLandscape} alt='spacecraft picture' />
          <img className='hidden lg:block' src={twoPortrait} alt='spacecraft picture' />
        </div>
      )
    } else if (chooseTech === 'three') {
      return (
        <div>
          <img className='block lg:hidden' src={threeLandscape} alt='spacecraft picture' />
          <img className='hidden lg:block' src={threePortrait} alt='spacecraft picture' />
        </div>
      )
    }
  }
  const changeSpacecraftInfo = () => {
    if (chooseTech === 'one') {
      return (
        <TechBackupLayout
          name={technology.one.name}
          description={technology.one.description}
        />
      )
    } else if (chooseTech === 'two') {
      return (
        <TechBackupLayout
          name={technology.two.name}
          description={technology.two.description}
        />
      )
    } else if (chooseTech === 'three') {
      return (
        <TechBackupLayout
          name={technology.three.name}
          description={technology.three.description}
        />
      )
      
    }
  }

  return (
    <section className='technology w-full h-full'>
      <Header />
      <div className='technology__spacecraft-container'>
        <h2 className='technology__spacecraft-container--title'><span>03</span> SPACE LAUNCH 101</h2>
        <div className='technology__spacecraft-container--content'>
          <div className='image'>
            {changeImage()}
          </div>
          <div className='flex items-center'>
            <div className='lg:flex flex-row'>
              <div className='flex lg:flex-col justify-center lg:justify-between py-8 md:py-14 lg:py-3 lg:mr-8'>
                <span className={
                  `flex justify-center items-center 
                  text-[16px] lg:text-[32px] 
                  lg:leading-[37px] leading-[18px]
                  tracking-[1px]
                  ring-offset-blue-100
                  w-[40px] lg:w-[80px] lg:h-[80px] h-[40px] 
                  rounded-full
                  cursor-pointer
                  ${chooseTech === 'one' ? 'bg-white' : 'bg-gray-600 hover:bg-white'}
                  `}
                  onClick={() => setChooseTech('one')}
                  >
                    1
                  </span>
                  <span className={
                  `flex justify-center items-center 
                  text-[16px] lg:text-[32px] 
                  lg:leading-[37px] leading-[18px]
                  tracking-[1px]
                  ring-offset-blue-100
                  w-[40px] lg:w-[80px] lg:h-[80px] h-[40px] 
                  rounded-full
                  cursor-pointer
                  ${chooseTech === 'two' ? 'bg-white' : 'bg-gray-600 hover:bg-white'}
                  `}
                  onClick={() => setChooseTech('two')}
                  >
                    2
                  </span>
                  <span className={
                  `flex justify-center items-center 
                  text-[16px] lg:text-[32px] 
                  lg:leading-[37px] leading-[18px]
                  tracking-[1px]
                  ring-offset-blue-100
                  w-[40px] lg:w-[80px] lg:h-[80px] h-[40px] 
                  rounded-full
                  cursor-pointer
                  ${chooseTech === 'three' ? 'bg-white' : 'bg-gray-600 hover:bg-white'}
                  `}
                  onClick={() => setChooseTech('three')}
                  >
                    3
                  </span>
              </div>
              <div className='information w-full h-full'>
                {changeSpacecraftInfo()}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TechBackup
