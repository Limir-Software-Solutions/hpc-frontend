import React from 'react';

import { Container, Card, Typography, Box, Grid, Paper } from '@mui/material';
import Contact from "../Contact";
import Cards from "../../components/Cards";

const AcercaDe = () => {
    return(
        <>
            <div className="py-20 bg-sky-700" style={{ position: "relative" }}>
                <Container>
                    <h1 className="text-3xl text-white font-medium text-left my-2 uppercase ">
                        A cerca del HPC
                    </h1>
                </Container>
            </div>
            <Container >
                <div className ="flex flex-col mb-3  ">
                    <h1 className="text-3xl text-black font-medium text-center my-10 uppercase ">
                        Kütral - Clúster Computacional del Laboratorio de High Performance Computing de la UOH
                    </h1>

                    ¡Bienvenido a Kütral, donde el fuego del conocimiento impulsa la genómica hacia nuevos horizontes! diseñado estratégicamente para impulsar la investigación y el análisis de datos genómicos a gran escala en la Universidad de O'Higgins (UOH). Nombrado en honor a la palabra mapudungun para "fuego", Kütral representa la ardiente dedicación a la exploración y el avance en el campo de la genómica.

                    <h1 className="text-xl text-black font-bold text-left my-2">
                        Potencia y Especificaciones Técnicas
                    </h1>
                    Kütral está equipado con una infraestructura robusta que consta de 1000 núcleos a una velocidad de 2,2 GHz, respaldados por 200 TB de almacenamiento y 7 TB de RAM. Su capacidad se ve reforzada por una interconexión de alta velocidad InfiniBand a 40 G/s, lo que permite un flujo de datos fluido y eficiente. Este clúster alberga máquinas especializadas, incluyendo una configurada con 1 TB de RAM y 88 núcleos para tareas complejas de ensamblaje genómico, así como otra dotada de 5000 GPU, ideal para implementar modelos de aprendizaje automático.

                    <h1 className="text-xl text-black font-bold text-left my-2">
                        Tecnología y Optimización
                        </h1>
                    Funcionando bajo el sistema operativo CentOS 7, Kütral utiliza el sistema de archivos BeeGFS, reconocido por su rapidez y seguridad. Además, incorpora herramientas de gestión como Slurm y Ansible para asegurar una administración eficiente y una configuración ágil. La integración de Nextflow, un sistema de gestión de flujo de trabajo especializado en el análisis de datos genómicos, y la plataforma web Open OnDemand, facilitan un acceso intuitivo y versátil a los recursos informáticos de Kütral desde cualquier dispositivo con navegador.

                    <h1 className="text-xl text-black font-bold text-left my-2 ">
                        Capacidad y Contribución a la Investigación Genómica
                        </h1>
                    Kütral se posiciona como el núcleo vital del compromiso de la UOH con la investigación y el desarrollo en genómica. Con capacidades que incluyen 1000 CPU cores, 5000 GPU cores, 200 TB de almacenamiento y 8 TB de RAM, este clúster emerge como una herramienta fundamental para impulsar investigaciones de vanguardia en el campo de la genómica.

                    En Kütral, se fusiona la potencia computacional con la pasión por la genómica, promoviendo avances significativos y descubrimientos innovadores. Este clúster representa nuestro firme compromiso con el progreso científico y la excelencia en la investigación genómica en la UOH.
                </div>
            </Container>
            <Container>
            <div className="flex sm:flex-row flex-col  mb-12 justify-between ">

                <Card
                    sx={{
                        boxShadow: 3,
                        backgroundColor: '#0369A1',
                        marginX: "26px",
                        marginY:"10px"
                    }}
                >
                    <Container>
                        <Typography variant="h4"
                                    sx={{
                                        marginY: "26px",
                                        color: '#FFFFFF'

                                    }}
                        >Misión</Typography>
                        <Typography className=" text-white"paragraph>
                            En el Laboratorio de High-Performance Computing, nuestra misión es ser un motor de avance científico, utilizando la potencia de la computación de alto rendimiento para impulsar investigaciones innovadoras y multidisciplinarias. Nos comprometemos a proporcionar recursos de vanguardia, fomentar la colaboración entre disciplinas y capacitar a la comunidad académica y científica en el uso efectivo de las tecnologías de HPC. Buscamos abordar desafíos complejos a nivel local y global, promover soluciones innovadoras y crear un impacto positivo en la sociedad a través del desarrollo y la aplicación de la computación de alto rendimiento.
                        </Typography>

                    </Container>
                </Card>

                <Card
                    sx={{
                        boxShadow: 3,
                        backgroundColor: '#0369A1',
                        marginX: "26px",
                        marginY:"10px"
                    }}
                >
                    <Container>
                        <Typography variant="h4"
                                    sx={{
                                        marginY: "26px",
                                        color: '#FFFFFF'
                                    }}
                        >Visión</Typography>
                        <Typography className=" text-white"paragraph>
                            En el Laboratorio de High-Performance Computing (HPC), nuestra visión es liderar la vanguardia de la innovación científica a través de la potencia de la computación avanzada. Nos comprometemos a impulsar la excelencia investigativa, fomentar la colaboración interdisciplinaria y capacitar a las mentes del futuro en el uso de tecnologías de vanguardia, todo con la meta de abordar desafíos globales, impactar positivamente en la sociedad y desbloquear avances significativos en la ciencia y la tecnología.
                        </Typography>

                    </Container>
                </Card>
            </div>
            </Container>

        </>

    )
}
export default AcercaDe;