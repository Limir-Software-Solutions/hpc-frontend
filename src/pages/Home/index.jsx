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
        <h1
          className="text-4xl text-black font-medium text-center my-20 uppercase"
        >
          Esta es la información que necesitas saber sobre el HPC
        </h1>
        <div className="justify-between items-center flex mb-16 flex-col sm:flex-row">
          <a href="/Equipo">
          <Cards
            imagen="/static/images/Presentación Cluster-10.JPG"
            titulo="Equipo"
            texto="Conoce al equipo de investigación detrás de todos los avances, proyectos y publicaciones que han sido posibles gracias al uso de nuestro HPC."
          /></a>
          <a href="/Noticias">
          <Cards
            imagen="/static/images/noti.png"
            titulo="Noticias"
            texto="Las últimas noticias con relación a nuestro HPC que van desde las recientes investigaciones del equipo hasta noticias internacionales afines a los intereses del laboratorio."
          /></a>

          <a href="/Infraestructura">
          <Cards

            imagen="/static/images/Laboratorios - Cluster-3.jpg"
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