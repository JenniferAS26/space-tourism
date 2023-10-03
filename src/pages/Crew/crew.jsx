//import { useEffect, useState } from "react"
import desktop from "/src/assets/crew/background-crew-desktop.jpg";
import mobile from "/src/assets/crew/background-crew-mobile.jpg";
import tablet from "/src/assets/crew/background-crew-tablet.jpg";
import douglas from "/src/assets/crew/image-douglas-hurley.png";
import mark from "/src/assets/crew/image-mark-shuttleworth.png";
import victor from "/src/assets/crew/image-victor-glover.png";
import anoussheh from "/src/assets/crew/image-anousheh-ansari.png";

const Crew = () => {
  return (
    <section className="bg-background crew-page-container">
      <div className="crew-page-title">
        <span>02</span>
        <p>Meet your crew</p>
      </div>

      <div className="crew-content-wrapper">
        <div className="content-douglas flex">
          <div className="content-douglas-1 flex-col">
            <p className="uppercase"> COMMANDER</p>
            <h1 className="font-bellefair text-3.1vw"> DOUGLAS HURLEY</h1>
          </div>

          <div className="content-douglas-texto ">
            <p className="font-bellefair">
              Douglas Gerald Hurley is an American engineer, former Marine Corps
              pilot and former NASA astronaut. He launched into space for the
              third time as commander of Crew Dragon Demo-2.
            </p>
          </div>

          <div className="crew-content-right">
            <img src="/assets/crew/image-douglas-hurley.png" alt="crew" />
            <div className="crew-right-border"></div>
          </div>
        </div>

        <div className="content-MARK flex">
          <div className="content-MARK-2 flex-col">
            <p className="uppercase"> MISSION SPECIALIST</p>
            <h1 className="font-bellefair text-3.1vw"> MARK SHUTTLEWORTH</h1>
          </div>

          <div className="content-MARK-texto">
            <p className="font-bellefair">
              Mark Richard Shuttleworth is the founder and CEO of Canonical,
              the company behind the Linux-based Ubuntu operating system.
              Shuttleworth became the first South African to travel to space as
              a space tourist.
            </p>
          </div>

          <div className="crew-content-right">
            <img src="/assets/crew/image-mark-shuttleworth.png" alt="crew" />
            <div className="crew-right-border"></div>
          </div>
        </div>

        <div className="content-victor flex">
          <div className="content-victor-3 flex-col">
            <p> PILOT</p>
            <h1 className="font-bellefair text-3.1vw"> VIRCTOR GLOVER</h1>
          </div>

          <div className="content-victor-texto">
            <p className="font-bellefair">
              Pilot on the first operational flight of the SpaceX Crew Dragon to
              the International Space Station. Glover is a commander in the U.S.
              Navy where he pilots an F/A-18.He was a crew member of Expedition
              64, and served as a station systems flight engineer.
            </p>
          </div>

          <div className="crew-content-right">
            <img src="/assets/crew/image-victor-glover.png" alt="crew" />
            <div className="crew-right-border"></div>
          </div>
        </div>

        <div className="content-anousheh flex">
          <div className="content-anousheh-4 flex-col">
            <p className="uppercase"> FLIGHT ENGINEER</p>
            <h1 className="font-bellefair text-3.1vw"> ANOUSHEH ANSARI</h1>
          </div>

          <div className="content-anousheh-texto">
            <p className="font-bellefair">
              Pilot on the first operational flight of the SpaceX Crew Dragon to
              the International Space Station. Glover is a commander in the U.S.
              Navy where he pilots an F/A-18.He was a crew member of Expedition
              64, and served as a station systems flight engineer.
            </p>
          </div>

          <div className="crew-content-right">
            <img src="/assets/crew/image-anousheh-ansari.png" alt="crew" />
            <div className="crew-right-border"></div>
          </div>
        </div>
     
      </div>
    </section>
  );
};

export default Crew;
