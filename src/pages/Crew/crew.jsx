//import { useEffect, useState } from "react"
const Crew = () => {
  return (
    <section className=" background crew-page-container">
      <div className="crew-page-title">
        <span>02</span>
        <p>Meet your crew</p>
      </div>

      <div className="crew-content-wrapper">
        <div className="crew-content-left">
          <div className="crew-content-left-1">
            <p> COMMANDER</p>
            <h1> DOUGLAS HURLEY</h1>
          </div>
          <div className="crew-content-left-2">
            <p>
              {" "}
              Douglas Gerald Hurley is an American engineer, former Marine Corps
              pilot and former NASA astronaut. He launched into space for the
              third time as commander of Crew Dragon Demo-2.
            </p>
          </div>
          <div className="crew-content-left">
            <div className="crew-content-left-1">
              <p> MISSION SPECIALIST </p>
              <h1> MARK SHUTTLEWORTH</h1>
            </div>
          <div className="crew-content-left-2">
            <p>
              {" "}
              Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind 
              the Linux-based Ubuntu operating system. Shuttleworth became the first South 
              African to travel to space as a space tourist.
            </p>
           </div>
          </div>
        </div>

        <div className="crew-content-right">
          <img src="/assets/crew/image-douglas-hurley.png" alt="crew" />
          <div className="crew-right-border"></div>
        </div>
        <div className="crew-content-right">
          <img src="/src/assets/crew/image-mark-shuttleworth.png" alt="crew" />
          <div className="crew-right-border"></div>
      </div>
      </div>

      
    </section>
  );
};

export default Crew;