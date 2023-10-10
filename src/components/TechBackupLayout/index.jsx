import PropTypes from 'prop-types'
import './styles.scss'

const TechBackupLayout = ({ name, description }) => {
  TechBackupLayout.propTypes = {
    name: PropTypes.element.isRequired,
    description: PropTypes.element.isRequired
  }
  return (
    <section className='technology-layout'>
      <h3 className=''>THE TERMINOLOGY…</h3>
      <h1 className='technology-layout__title'>{name}</h1>
      <p className='technology-layout__text'>{description}</p>
    </section>
  )
}

export default TechBackupLayout
