import imagetitan from '../../assets/destination/image-titan.png'
import style from './style.module.scss'


const DestinationTitan = () => {
  return (
    <div>
        <div>
        <h1 className={style.title}>01 PICK YOUR DESTINATION</h1>
        <img src={imagetitan} alt="" />
        </div>
        <div className={style.home}>
          EARTH
          MOON
          EUROPA
          TITAN
        </div>
        <div>
        <h1>TITAN</h1>
        </div>
        <div>
        <p> The only moon Known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, ypu get striking views of the Eings of Saturn.</p>
        </div>
        <div>
          AVG. DISTANCE
          1.6 BIL. KM
          </div>
          <div>
          EST. TRAVEL TIME 7 YEARS
        </div>
    </div>
  )
}

export default DestinationTitan
