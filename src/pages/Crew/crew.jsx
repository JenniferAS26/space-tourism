
import desktop from "/src/assets/crew/background-crew-desktop.jpg";
import mobile from "/src/assets/crew/background-crew-mobile.jpg";
import tablet from "/src/assets/crew/background-crew-tablet.jpg";
import douglas from "/src/assets/crew/image-douglas-hurley.png";
import mark from "/src/assets/crew/image-mark-shuttleworth.png";
import victor from "/src/assets/crew/image-victor-glover.png";
import anoussheh from "/src/assets/crew/image-anousheh-ansari.png";

const Crew = () => {
  return (
    <section className="bg-auto bg-no-repeat bg-center crew-page-container p-4 md:p-8 lg:p-12 relative" style={{ backgroundImage: 'url(../assets/background-crew-desktop.jpg)' }}>
      
    <div className="crew-content-wrapper space-y-8 md:space-y-12">
      <div className="content-douglas flex flex-col md:flex-row items-center md:space-x-8">
        <div className="content-douglas-1 flex flex-col items-start mb-7 md:mb-0">
          <p className="font-bellefair text-light-sky-blue text-3xl uppercase">COMMANDER</p>
          <h1 className="font-bellefair font-thin text-5xl uppercase">DOUGLAS HURLEY</h1>
        </div>
        
        <div className="content-douglas-texto flex-grow md:w-1/2 mt-4 max-w-[30em]">
          <p className="font-bellefair text-base">
            Douglas Gerald Hurley is an American engineer, former Marine Corps
            pilot and former NASA astronaut. He launched into space for the
            third time as commander of Crew Dragon Demo-2.
          </p>
        </div>
        
        <div className="crew-content-right relative md:w-1/3 bottom-[-5em] max-h-[40em]">
          <img className="w-full" src="/assets/crew/image-douglas-hurley.png" alt="crew" />
          <div className="crew-right-border absolute"></div>
        </div>
        
      </div>

        <div className="content-mark flex flex-col md:flex-row items-center md:space-x-8">
          <div className="content-mark-2 flex flex-col items-start mb-7 md:mb-0" >
            <p className="font-bellefair text-light-sky-blue text-3xl uppercase">MISSION SPECIALIST</p>
            <h1 className="font-bellefair font-thin text-5xl uppercase">MARK SHUTTLEWORTH</h1>
          </div>
          <div className="content-mark-texto flex-grow md:w-1/2 mt-4 max-w-[30em]">
            <p className="font-bellefair text-base">
              Mark Richard Shuttleworth is the founder and CEO of Canonical,
              the company behind the Linux-based Ubuntu operating system.
              Shuttleworth became the first South African to travel to space as
              a space tourist..
            </p>
          </div>
          <div className="crew-content-right relative md:w-1/3 bottom-[-5em] max-h-[40em]">
            <img className="w-full" src="/assets/crew/image-mark-shuttleworth.png" alt="crew" />
            <div className="crew-right-border absolute ..."></div>
          </div>
        </div>

        <div className="content-victor flex flex-col md:flex-row items-center md:space-x-8">
          <div className="content-victor-3 flex flex-col items-start mb-7 md:mb-0">
            <p className="font-bellefair text-light-sky-blue text-3xl uppercase">PILOT</p>
            <h1 className="font-bellefair font-thin text-5xl uppercase">VICTOR GLOVER</h1>
          </div>
          <div className="content-douglas-texto flex-grow md:w-1/2 mt-4 max-w-[30em]">
            <p className="font-bellefair text-base">
              Pilot on the first operational flight of the SpaceX Crew Dragon to
              the International Space Station. Glover is a commander in the U.S.
              Navy where he pilots an F/A-18.He was a crew member of Expedition
              64, and served as a station systems flight engineer.
            </p>
          </div>
          <div className="crew-content-right relative md:w-1/3 bottom-[-5em] max-h-[40em]">
            <img className="w-full" src="/assets/crew/image-victor-glover.png" alt="crew" />
            <div className="crew-right-border absolute"></div>
          </div>
        </div>

         <div className="content-anousheh flex flex-col md:flex-row items-center md:space-x-8">
          <div className="content-anousheh-4 flex flex-col items-start mb-7 md:mb-0">
            <p className="font-bellefair text-light-sky-blue text-3xl uppercase">FLIGHT ENGINEER</p>
            <h1 className="font-bellefair font-thin text-5xl uppercase">ANOUSHEH ANSARI</h1>
          </div>
          <div className="content-anousheh-texto flex-grow md:w-1/2 mt-4 max-w-[30em]">
            <p className="font-bellefair text-base">
              Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. 
              Ansari was the fourth self-funded space tourist, the first self-funded woman to 
              fly to the ISS, and the first Iranian in space. 
            </p>
          </div>
          <div className="crew-content-right relative md:w-1/3 bottom-[-5em] max-h-[40em]">
          <img className="w-full border-b border-gray-400" src="/assets/crew/image-anousheh-ansari.png" alt="crew" style={{ marginBottom: '-12vw' }} />
          <div className="crew-right-border absolute"></div>
          </div>
        </div>
      
      </div>
    </section>
  );
};

export default Crew;
