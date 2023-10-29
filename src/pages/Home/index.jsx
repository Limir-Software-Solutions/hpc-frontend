import * as React from 'react';
import { Container} from '@mui/material';
import Cards from '../../components/Cards';
import Carousel from '../../components/Carousel';

export default function Home() {

  const slides = [
    "static/images/campus_aereo.jpg",
    "static/images/UOH.jpg",
    "static/images/frontis_uoh.jpg",
    "static/images/uoh_hall.jpeg",
  ];


  return (
    <>
      <Carousel slides={slides}/>
      <Container>
        <div className="justify-between items-center flex my-16 flex-col sm:flex-row">
          <a href="/Equipo">
          <Cards
            imagen="/static/images/nosotros.webp"
            titulo="Equipo"
            texto="Conoce al equipo de investigación detrás de todos los avances, proyectos y publicaciones que han sido posibles gracias al uso de nuestro HPC."
          /></a>
          <a href="/">
          <Cards
            imagen="/static/images/noti.png"
            titulo="Noticias"
            texto="Las últimas noticias con relación a nuestro HPC que van desde las recientes investigaciones del equipo hasta noticias internacionales afines a los intereses del laboratorio."
          /></a>

          <a href="/Infraestructura">
          <Cards

            imagen="/static/images/hpc.png"
            titulo="Infraestructura"
            texto="El supercomputador más poderoso de la Sexta Región está disponible para los investigadores de todo el país."
          />
          </a>
        </div>

        {/* TODO: se debe hacer lo de los eventos*/}
        <div>

        </div>
      </Container>
    </>
  );
}