import * as React from 'react';
import { Container} from '@mui/material';
import Cards from '../../components/Cards';
import Carousel from '../../components/carousel/index';

export default function Home() {

  const slides = [
    "https://wallpapercave.com/wp/wp1904115.png",
    "https://wallpapercave.com/wp/wp2498526.jpg",
    "https://wallpapercave.com/wp/wp2703769.jpg",
    "https://wallpapercave.com/wp/wp2262445.jpg",
  ];


  return (
    <>
      <Carousel slides={slides}/>
      <Container>
        <div className="justify-between items-center flex my-16 flex-col sm:flex-row">
          <Cards
            imagen="/static/images/Logouoh.png"
            titulo="Nosotros"
            texto="El HPC de la UOH proporciona experiencia, capacidad de cómputo, servicios y capacitación para permitir la investigación intensiva en computación y ciencia de datos."
          />
          <Cards
            imagen="/static/images/Logouoh.png"
            titulo="Servicios"
            texto="Nuestros servicios están diseñados para ofrecer soporte e innovación basada en supercómputo (HPC)."
          />
          <Cards
            imagen="/static/images/Logouoh.png"
            titulo="Infraestructura"
            texto="El supercomputador más poderoso de Chile está disponible para los investigadores de todo el país."
          />
        </div>

        {/* TODO: se debe hacer lo de los eventos*/}
        <div>

        </div>
      </Container>
    </>
  );
}