
const DestinationLayout = ({ name, description, distance, travel }) => {
  return (
    <section className='destination-layout'>
      <h2 className='destination-layout__title'>{name}</h2>
      <p>{description}</p>
      <hr />
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
