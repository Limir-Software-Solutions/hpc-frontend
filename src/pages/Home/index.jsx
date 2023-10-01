import * as React from 'react';
import { Container} from '@mui/material';
import Cards from '../../components/Cards';
import Carousel from '../../components/Carousel';

export default function Home() {

  const slides = [
    "https://i.pinimg.com/originals/51/82/ac/5182ac536727d576c78a9320ac62de30.jpg",
    "https://wallpapercave.com/wp/wp3386769.jpg",
    "https://wallpaperaccess.com/full/809523.jpg",
    "https://getwallpapers.com/wallpaper/full/5/c/0/606489.jpg",
  ];

  return (
    <>
      <Carousel slides={slides}/>
      <Container>
        {/* TODO: se debe hacer el carrusel*/}

        <div className="justify-between items-center flex my-16">
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