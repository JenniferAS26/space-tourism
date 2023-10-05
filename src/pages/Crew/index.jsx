import Header from '../../components/Header'
import douglasImage from "../../assets/crew/image-douglas-hurley.png";
import markImage from "../../assets/crew/image-mark-shuttleworth.png";
import victorImage from "../../assets/crew/image-victor-glover.png";
import anousshehImage from "../../assets/crew/image-anousheh-ansari.png";
import './styles.scss'

const Crew = () => {

  return (
    <section className="crew-page-container">
      <Header />
      <div className="crew-content-wrapper space-y-8 md:space-y-12">
        
        <div className="crew-title flex flex-col">
          <h3 className="font-bellefair title left-[166.5px] top-212 h-34 w-286 gap-2 py-0 pr-1 pl-0 pt-0">
            <span className="title-number">02 </span>
            MEET YOUR CREW
          </h3>
        </div>
        <div className="content-douglas flex flex-col md:flex-row items-center md:space-x-8">
          <div className="crew-detail">
            <div className="content-douglas-1 flex flex-col items-start mb-7 md:mb-0">
              <p className="font-bellefair text-light-sky-blue text-3xl uppercase left-165 top-400 h-37 w-214 opacity-50 ">
                COMMANDER
              </p>
              <h1 className="font-bellefair font-normal text-5xl leading-[64px] uppercase left-165 top-400 h-37 w-400">
                DOUGLAS HURLEY
              </h1>
            </div>
            <div className="content-douglas-texto flex-grow md:w-1/2 mt-4 max-w-[30em]">
              <p className="font-barlow text-base font-normal leading-[32px]">
                Douglas Gerald Hurley is an American engineer, former Marine Corps
                pilot and former NASA astronaut. He launched into space for the
                third time as commander of Crew Dragon Demo-2.
              </p>
            </div>
          </div>

          <div className="crew-content-right md:w-1/3 bottom-[-5em] max-h-[40em]">
            <img
              className="w-[568.07px] h-[712px] top-[198px] left-[734.93px]"
              src={douglasImage}
              alt="crew"
            />
            <div className="crew-right-border absolute"></div>
          </div>
        </div>

        <div className="content-mark flex flex-col md:flex-row items-center md:space-x-8">
          <div className="crew-detail">
            <div className="content-mark-2 flex flex-col items-start mb-7 md:mb-0">
              <p className="font-bellefair text-light-sky-blue text-3xl uppercase left-165 top-400 h-37 w-214 opacity-50">
                MISSION SPECIALIST
              </p>
              <h1 className="font-bellefair font-normal text-5xl leading-[64px] uppercase left-165 top-400 h-37 w-400">
                MARK SHUTTLEWORTH
              </h1>
            </div>
            <div className="content-mark-texto flex-grow md:w-1/2 mt-4 max-w-[30em]">
              <p className="font-barlow text-base font-normal leading-[32px]">
                Mark Richard Shuttleworth is the founder and CEO of Canonical, the
                company behind the Linux-based Ubuntu operating system.
                Shuttleworth became the first South African to travel to space as
                a space tourist..
              </p>
            </div>
          </div>
          <div className="crew-content-right md:w-1/3 bottom-[-5em] max-h-[40em]">
            <img
              className="w-[568.07px] h-[712px] top-[198px] left-[734.93px]"
              src={markImage}
              alt="crew"
            />
            <div className="crew-right-border absolute ..."></div>
          </div>
        </div>

        <div className="content-victor flex flex-col md:flex-row items-center md:space-x-8">
          <div className="crew-detail">
            <div className="content-victor-3 flex flex-col items-start mb-7 md:mb-0">
              <p className="font-bellefair text-light-sky-blue text-3xl uppercase left-165 top-400 h-37 w-214 opacity-50">
                PILOT
              </p>
              <h1 className="font-bellefair font-normal text-5xl leading-[64px] uppercase left-165 top-400 h-37 w-400">
                VICTOR GLOVER
              </h1>
            </div>
            <div className="content-victor-texto flex-grow md:w-1/2 mt-4 max-w-[30em]">
              <p className="font-barlow text-base font-normal leading-[32px]">
                Pilot on the first operational flight of the SpaceX Crew Dragon to
                the International Space Station. Glover is a commander in the U.S.
                Navy where he pilots an F/A-18.He was a crew member of Expedition
                64, and served as a station systems flight engineer.
              </p>
            </div>
          </div>
          <div className="crew-content-right md:w-1/3 bottom-[-5em] max-h-[40em]">
            <img
              className="w-[568.07px] h-[712px] top-[198px] left-[734.93px]"
              src={victorImage}
              alt="crew"
            />
            <div className="crew-right-border absolute"></div>
          </div>
        </div>

        <div className="content-anousheh flex flex-col md:flex-row items-center md:space-x-8">
          <div className="crew-detail">
            <div className="content-anousheh-4 flex flex-col items-start mb-7 md:mb-0">
              <p className="font-bellefair text-light-sky-blue text-3xl uppercase left-165 top-400 h-37 w-214 opacity-50">
                FLIGHT ENGINEER
              </p>
              <h1 className="font-bellefair font-normal text-5xl leading-[64px] uppercase left-165 top-400 h-37 w-400">
                ANOUSHEH ANSARI{" "}
              </h1>
            </div>
            <div className="content-anousheh-texto flex-grow md:w-1/2 mt-4 max-w-[30em]">
              <p className="font-barlow text-base font-normal leading-[32px]">
                Anousheh Ansari is an Iranian American engineer and co-founder of
                Prodea Systems. Ansari was the fourth self-funded space tourist,
                the first self-funded woman to fly to the ISS, and the first
                Iranian in space.
              </p>
            </div>
          </div>
          <div className="crew-content-right md:w-1/3 bottom-[-5em] max-h-[40em]">
            <img
              className="w-[568.07px] h-[712px] top-[198px] left-[734.93px]"
              src={anousshehImage}
              alt="crew"
            />
            <div className="crew-right-border absolute"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Crew;