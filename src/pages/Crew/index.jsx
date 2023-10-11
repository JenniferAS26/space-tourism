import { useEffect, useState } from "react";
import Header from "../../components/Header";
/* import douglasImage from "../../assets/crew/image-douglas-hurley.png";
import markImage from "../../assets/crew/image-mark-shuttleworth.png";
import victorImage from "../../assets/crew/image-victor-glover.png";
import anousshehImage from "../../assets/crew/image-anousheh-ansari.png"; */
import data from "../../data/data.json";
import "./styles.scss";

const Crew = () => {
  const [crew, setCrew] = useState(null);

  const handleClick = (item) => {
    setCrew({
      name: item.name,
      image: item.images.png,
      role: item.role,
      bio: item.bio,
      id: item.id,
    });
  };

  useEffect(() => {
    const loadData = async () => {
      const data = await import("../../data/data.json");
      setCrew({
        name: data.crew[0].name,
        image: data.crew[0].images.png,
        role: data.crew[0].role,
        bio: data.crew[0].bio,
        id: data.crew[0].id,
      });
    };
    loadData();
  }, []);
  if (!crew) {
    return <div>Loading...</div>;
  }

  return (
    <section className="crew-page-container">
      <Header />
      <div className="crew-content-wrapper">
        <div className="crew-page-title">
          <span>02{crew.id}</span>
          <p>Meet your crew</p>
        </div>
        <div className="crew-detail-tripulacion">
          <div className="crew-detail-tripulacion__wrapper">
            <div className="crew-detail-tripulacion-1">
              <p>{crew.role}</p>
              <h1>{crew.name}</h1>
            </div>
            <div className="crew-tripulacion-information">
              <p>{crew.bio}</p>
            </div>
          </div>
          <div className="crew-tripulacion-image">
            <img src={crew.image} alt={crew.name} />
            <div className="crew-right-border"></div>
          </div>
          <div className="points-container">
            {
              data.crew.map((item) => {
                return (
                  <div
                    key={item.id}
                    className="points"
                    id={`crew-${item.id}`}
                    onClick={() => handleClick(item)}
                  ></div>
                );
              })
            }
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default Crew;