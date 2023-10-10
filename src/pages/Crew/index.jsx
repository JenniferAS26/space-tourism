import { useEffect, useState } from "react";
import Header from "../../components/Header";
/* import douglasImage from "../../assets/crew/image-douglas-hurley.png";
import markImage from "../../assets/crew/image-mark-shuttleworth.png";
import victorImage from "../../assets/crew/image-victor-glover.png";
import anousshehImage from "../../assets/crew/image-anousheh-ansari.png"; */
import data from '../../data/data.json'
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
      const data = await import('../../data/data.json');
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
    <section className="crew-page-container w-full h-full ">
    <Header />

    <div className="crew-content-wrapper w-full mx-2 md:mx-8 lg:mx-16">

      <div className="crew-page-title mb-4 md:mb-8 underline-animation">
        <span className="md:text-2xl lg:text-3xl">02{crew.id}</span>
        <p className="mx-4 md:mx-8 text-xl md:text-2xl lg:text-3xl">Meet your crew</p>
      </div>

      <div className="crew-detail-tripulacion w-full text-center md:text-center ">
      
        <div className="crew-detail-tripulacion-1 grid grid-rows-4 grid-flow-col gap-4 text-left ">
          <p className="text-lg md:text-xl lg:text-2xl text-center">{crew.role}</p>
          <h1 className="text-2xl md:text-3xl lg:text-4xl">{crew.name}</h1>
        </div>

        <div className="crew-tripulacion-information ">
          <p className="max-w-lg text-xl text-center md:text-2xl lg:text-3xl">{crew.bio}</p>
        </div>

        <div className="crew-tripulacion-right  max-w-lg md:max-w-2xl w-full h-auto mx-auto md:mx-0">
          <img src={crew.image} alt={crew.name} />
          <div className="crew-right-border"></div>
        </div>
      </div>
    </div>
    
    <div className="points-container bottom-0 left-0 w-full md:w-1/4 lg:w-1/5 flex-shrink-0">
      {data.crew.map((item) => (
        <div className="points cursor-pointer"
          key={item.id}
          id={`crew-${item.id}`}
          onClick={() => handleClick(item)}
        ></div>
      ))}
    </div>
</section>

  
  );
};

export default Crew;

