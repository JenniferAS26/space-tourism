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
    <section className="crew-page-container w-full h-full">
      <Header />
      <div className="crew-content-wrapper w-full h-full">
        <div className="crew-page-title ">
            <span>02{crew.id}</span>
            <p className=" ">Meet your crew</p>
        </div>
        <div className="crew-detail-tripulacion w-full h-full text-lef tleft-0  bottom-0 left-0 t m-auto lg:ml-[200px]">
          <div className="crew-detail-tripulacion-1 text-left  ">
            <p>{crew.role}</p>
            <h1>{crew.name}</h1>
          </div>
          <div className="crew-tripulacion-information ">
            <p className="max-w-lg text-3xl text-left  font-$font-source-heading-2 leading-normal text-$primary-text-color-900 dark:text-white leading-{type}">{crew.bio}</p>
          </div>
         
          <div className="crew-tripulacion-image h-auto max-w-lg ml-auto w-616 h-607">
              <img src={crew.image} alt={crew.name} />
          <div className="crew-right-border"></div>
          </div>
          </div>
          </div>
          <div className="points-container   bottom-0 left-0 w-616  h-607 inset-y-0 right-0 flex-shrink-0;">
            {data.crew.map((item) => {
              return (
                <div key={item.id}  className="points" id={`crew-${item.id}`} onClick={() => handleClick(item)}></div>
                );
            })}
        </div>
      
    </section>
  )
}

export default Crew
