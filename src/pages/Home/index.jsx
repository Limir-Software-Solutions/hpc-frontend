import * as React from "react";
import { Container, Typography } from "@mui/material";
import Cards from "../../components/Cards";
import Carousel from "../../components/Carousel";
import NewsSlider from "../../components/NewsSlider";

export default function Home() {
  const slides = [
    "static/images/campus_aereo.jpg",
    "static/images/UOH.jpg",
    "static/images/frontis_uoh.jpg",
    "static/images/uoh_hall.jpeg",
  ];

  return (
    <>
      <Carousel slides={slides} />
      <Container>
        <Typography
          variant="h1"
          sx={{
            fontWeight: "700",
            marginTop: "8rem",
            marginBottom: "1rem",
            fontSize: { xs: "22px", lg: "47px" },
          }}
        >
          Descubre Kütral
        </Typography>
        <p className="text-justify text-lg text-black font-normal mb-16">
          El Clúster Computacional de High Performance Computing en la UOH.
          Potenciando la investigación genómica, Kütral cuenta con 1000 núcleos,
          200 TB de almacenamiento, y 7 TB de RAM. Equipado con tecnología de
          vanguardia, como GPU para aprendizaje automático, CentOS 7, y BeeGFS,
          ofrece un acceso intuitivo a través de Nextflow y Open OnDemand.
          Impulsando avances en genómica, Kütral representa el compromiso de la
          UOH con la excelencia en la investigación científica.
          <span>
            <a href="/AcercaDe" className={"text-blue-500 hover:text-blue-400"}>
              {" "}
              Más información
            </a>
          </span>
        </p>

        <Typography
          variant="h1"
          sx={{
            fontWeight: "700",
            marginTop: "8rem",
            marginBottom: "1rem",
            fontSize: { xs: "22px", lg: "47px" },
          }}
        >
          Esta es la información que necesitas saber sobre el HPC
        </Typography>
        <div className="justify-between items-center flex mb-16 flex-col sm:flex-row">
          <a href="/Equipo">
            <Cards
              imagen="/static/images/Presentación Cluster-10.JPG"
              titulo="Equipo"
              texto="Conoce al equipo de investigación detrás de todos los avances, proyectos y publicaciones que han sido posibles gracias al uso de nuestro HPC."
            />
          </a>
          <a href="/Papers">
            <Cards
              imagen="/static/images/Presentación Cluster-12.JPG"
              titulo="Publicaciones"
              texto="Publicaciones más recientes de nuestro equipo de investigación conformado tanto por profesores como por estudiantes de pre y postgrado."
            />
          </a>

          <a href="/Infraestructura">
            <Cards
              imagen="/static/images/Laboratorios - Cluster-3.jpg"
              titulo="Infraestructura"
              texto="El supercomputador más poderoso de la Sexta Región está disponible para los investigadores de todo el país."
            />
          </a>
        </div>
        <NewsSlider />
      </Container>
    </>
  );
}
