import PropTypes from 'prop-types'
import './styles.scss'

const DestinationLayout = ({ name, description, distance, travel }) => {
  DestinationLayout.propTypes = {
    name: PropTypes.element.isRequired,
    description: PropTypes.element.isRequired,
    distance: PropTypes.element.isRequired,
    travel: PropTypes.element.isRequired,
  }
  return (
    <section className='destination-layout w-full h-full'>
      <h2 className='destination-layout__title'>{name}</h2>
      <p className='destination-layout__text'>{description}</p>
      <div className='destination-layout__bar'></div>
      <div className='destination-layout__distance-travel'>
        <div className='destination-layout__distance-travel--distance'>
          <span>AVG. DISTANCE</span>
          <h3>{distance}</h3>
        </div>
        <div className='destination-layout__distance-travel--travel'>
          <span>Est. travel time</span>
          <h3>{travel}</h3>
        </div>
      </div>
    </section>
  )
}

export default DestinationLayout
