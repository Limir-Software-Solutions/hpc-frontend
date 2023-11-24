import React from "react";
import { Container, Card, Typography, Box, Grid, Paper } from "@mui/material";
import ProfessorCard from "../../components/ProfessorCard";

const Equipo = () => {
  return (
    <>
      <div className="py-20 bg-sky-700" style={{ position: "relative" }}>
        <Container>
          <h1 className="text-3xl text-white font-medium text-left my-2 uppercase ">
            Equipo
          </h1>
        </Container>
      </div>
      <Container>
        <div className="flex-row md:flex-col mb-12 justify-center text-left ">
          <p className="text-white"> a</p>
          <hr
            color={"black"}
            size={"2"}
            width={"100%"}
            style={{ background: "black", height: "2px" }}
          ></hr>

          <p>
            {" "}
            El equipo central del HPC reside en el Instituto de Ciencias de la
            Ingeniería (ICI) y el clúster de cómputo en el Laboratorio HPC en el
            Campus Rancagua.
          </p>
            <Card
                sx={{
                    boxShadow: 2,
                    paddingX: "20px",
                    marginTop: "3rem",
                }}
            >
          <h1 className="text-2xl my-5">Director</h1>
          <div className="flex flex-col md:flex-row justify-between">
            <img
              style={{ maxWidth: "400px" }}
              src="static/images/alex.jpeg"
              alt="prueba"
            />

            <div className="text-justify mx-5">
              <p>
                Alex Di Genova es Ingeniero en Bioinformática de la Universidad
                de Talca y Doctor en Ingeniería de Sistemas Complejos de la
                Universidad Adolfo Ibáñez. La línea de investigación del Dr. Di
                Genova se centra en el desarrollo de nuevos algoritmos para el
                análisis de datos genómicos. El Dr. Di Genova ha publicado más
                de 30 artículos científicos en revistas ISI, ha participado en
                proyectos genómicos nacionales e internacionales y ha
                contribuido dos programas de código abierto para ensamblar
                secuencias genómicas. Actualmente el Dr. Di Genova está
                desarrollando nuevos métodos y algoritmos computacionales para
                caracterizar reordenamientos genómicos en distintos tipos de
                cáncer humano, con el objetivo de comprender como estos procesos
                mutacionales contribuyen en la progresión y evolución de esta
                enfermedad.
                En el Instituto de Ciencias de la Ingeniería, Alex Di Genova
                participa en el área de Biología computacional y Biotecnología.
              </p>



            </div>
          </div>

          <div className="flex-col text-left my-2">
            <h1 className=" text-xl font-bold">Alex Di Genova</h1>

            <h1>Director Laboratorio de Computación de Alto Rendimiento</h1>

            <h1 className="text-sky-700">alex.digenova@uoh.cl</h1>

            <h1 className="">Teléfono fijo: 2 29030037</h1>
          </div>
            </Card>
        </div>
        <hr
          color={"black"}
          size={"2"}
          width={"100%"}
          style={{ background: "black", height: "2px" }}
        ></hr>
        <div className="flex flex-col my-2">
          <h1 className="text-2xl my-2">Equipo de Investigación</h1>

          <ProfessorCard
            imagen={"static/images/raul.jpeg"}
            descripcion={
              "Raúl se tituló de Ing. en Recursos Naturales Renovables en 2008. Posteriormente trabajó como profesional en la Dirección General de Aguas de Copiapó y como analista meteorológico en la empresa Ambimet. El año 2011 inicia sus estudios de Doctorado en Cs. Atmosféricas y Oceánicas en la Universidad de Colorado Boulder gracias a una beca proporcionada por el Gobierno de Chile (Becas Chile) y el programa Fulbright BIO de Estados Unidos. Durante su doctorado investigó la estructura de las corrientes de aire en las montañas costeras del norte de California y su relación con la precipitación orográfica utilizando un radar meteorológico en tierra y uno aerotransportado, obteniendo el grado de doctor en 2016. En 2017 regresa a Chile para continuar con un proyecto Fondecyt Postdoctoral en el cual estudió la relación entre Ríos Atmosféricos y lluvias extremas en la zona centro-sur de Chile."
            }
            nombre={"Raúl Valenzuela"}
            rol={"Profesor Asistente"}
            contacto={"raul.valenzuela@uoh.cl"}
          />

          <ProfessorCard
            imagen={"static/images/carol.jpeg"}
            descripcion={
              "Carol Moraga es Ingeniera en Bioinformática de la Universidad de Talca (2010) y doctora en Bioinformática de la Universidad Claude Bernard Lyon 1, Francia (2020).\n" +
              "\n" +
              "Hasta el 2022, se desempeñó como Investigadora postdoctoral de la Universidad de O'Higgins de Rancagua, en estrecha colaboración con el CNRS (Francia) y el CIBIO (Portugal), en donde trabaja en la generación del genoma de referencia de Silene Latifolia, liderando el ensamblaje y anotación del cromosoma Y , que es uno de los cromosomas Y más grandes conocidos de una especie vegetal (550 mb) y modelo de estudio para entender la evolución de los cromosomas sexuales.\n" +
              "\n" +
              "En Chile, ha participado en importantes proyectos a nivel nacional como la secuenciación de especies del Desierto de Atacama, y la primera secuenciación y anotación de variables genéticas en la población mapuche nativa chilena (Huilliche).\n" +
              "\n" +
              "Su mayor motivación ha sido comprender la biología desde una perspectiva basada en el genoma e interpretación de datos ómicos, especialmente con un fuerte enfoque en especies no modelo.\n" +
              "\n" +
              "Actualmente su línea de investigación se centra en el desarrollo de algoritmos para predecir redes de interacción entre miRNAs:mRNAs en especie no modelo, específicamente en plantas nativas, para entender cómo estas evolucionan en determinación de sexo y como se adaptan a su ambiente.\n" +
              "\n" +
              "Carol desarrolla investigación relacionada al área de Biología Computacional y  Biotecnología en el Instituto de Ciencias de la Ingeniería."
            }
            nombre={"Carol Moraga"}
            rol={"Profesora Asistente"}
            contacto={"carol.moraga@uoh.cl"}
          />
          <hr
              color={"black"}
              size={"2"}
              width={"100%"}
              style={{ background: "black", height: "2px" }}
          ></hr>
          <h1 className="text-2xl my-2 ">
            Equipo de Desarrollo
          </h1>
          <div className="flex flex-row md:flex-row justify-between">
            <div className="flex flex-col">
            <img className="rounded-full"
                style={{ maxWidth: "200px" }}
                src="static/images/luis.jpeg"
                alt="prueba"
            />
              <h1 className="text-center">Luis Miranda</h1>
              <h1 className="text-center">Cum Master</h1>
            </div>

            <div className="flex flex-col">
              <img className="rounded-full"
                   style={{ maxWidth: "200px" }}
                   src="static/images/ivan.jpeg"
                   alt="prueba"
              />
              <h1 className="text-center">Iván Bozo</h1>
              <h1 className="text-center">Catador de Anos</h1>
            </div>
            <div className="flex flex-col">
              <img className="rounded-full"
                   style={{ maxWidth: "200px" }}
                   src="static/images/lukas.jpeg"
                   alt="prueba"
              />
              <h1 className="text-center">Lukas Flores</h1>
              <h1 className="text-center">El God</h1>
            </div>
            <div className="flex flex-col">
              <img className="rounded-full"
                   style={{ maxWidth: "200px" }}
                   src="static/images/mauri.jpeg"
                   alt="prueba"
              />
              <h1 className="text-center">Mauricio Meza</h1>
              <h1 className="text-center">El alérgico al sexo</h1>
            </div>
            <div className="flex flex-col">
              <img className="rounded-full"
                   style={{ maxWidth: "200px" }}
                   src="static/images/rodri.jpeg"
                   alt="prueba"
              />
              <h1 className="text-center">Rodrigo Llancao</h1>
              <h1 className="text-center">El adicto al sexo</h1>
            </div>
          </div>




        </div>

      </Container>
    </>
  );
};
export default Equipo;