import bgImageMobile from '../../assets/destination/background-destination-mobile.jpg'
import bgImageTablet from '../../assets/destination/background-destination-tablet.jpg'
import bgImageDesktop from '../../assets/destination/background-destination-desktop.jpg'
import './styles.scss'


const Destination = () => {
  return (
    <section className='destination'>
      <picture>
        <source media='(min-width: 1440px)' srcSet={bgImageDesktop} />
        <source media='(min-width: 768px)' srcSet={bgImageTablet} />
        <img src={bgImageMobile} alt='night sky image' />
      </picture>
    </section>
  )
}

export default Destination
