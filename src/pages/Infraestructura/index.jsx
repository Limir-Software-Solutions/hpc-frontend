import React from 'react';
import { Container, Card, Typography, Box, Grid, Paper } from '@mui/material';

export default function Infraestructura() {
  return (
    <Container>
      <Typography variant="h2">Infraestructura</Typography>
  
  <Typography paragraph>
  Kütral (fuego en mapudungun) computer cluster, una robusta infraestructura informática diseñada específicamente para respaldar el análisis avanzado de datos genómicos a gran escala. Representa el núcleo de nuestro compromiso con la investigación y el desarrollo en genómica.
  </Typography>
  <Card>
    <Typography variant="h4">Kütral</Typography>
    <Typography paragraph>
      Cuenta con 1000 núcleos a 2,2 GHz, 200 TB de almacenamiento y 7 TB de RAM, interconectados mediante InfiniBand a 40 G/s. Dispone de máquinas especializadas, incluyendo una con 1 TB de RAM y 88 núcleos para tareas complejas de ensamblaje del genoma y otra equipada con 5000 GPU, ideal para la implementación de modelos de aprendizaje automático.
    </Typography>
    <Typography paragraph>
      Kütral opera bajo el sistema operativo CentosOS 7 y utiliza el eficiente sistema de archivos BeeGFS, reconocido por su velocidad y seguridad. Además, está equipado con herramientas de gestión como Slurm y Ansible para garantizar una administración optimizada y una configuración ágil. 
      Además, integra el sistema de gestión de flujo de trabajo Nextflow, específicamente diseñado para el análisis de datos genómicos, y la plataforma web Open OnDemand, que facilita un acceso intuitivo y versátil a los recursos informáticos de Kütral desde cualquier dispositivo con navegador.
    </Typography>
  </Card>

      <Box my={3}>
        <Card variant="outlined" style={{ padding: '20px', marginBottom: '20px' }}>
          <Typography variant="h4" gutterBottom>IBM-idataPlex Cluster</Typography>
          <ul>
            <li>66 nodes</li>
            <li>528 cores</li>
            <li>3.1Tb RAM (48Gb/node)</li>
            <li>Infiniband Conection (40Gb/s)</li>
          </ul>
        </Card>
      </Box>

      {/* Sección de Capacidad Total */}
      <Typography variant="h3" gutterBottom>Capacidad total</Typography>
      <Typography paragraph>La capacidad total del cluster uoh...</Typography>

      <Grid container spacing={4} justifyContent="center">
    
    <Grid item xs={12} sm={6} md={3}>
      <Typography variant="h2" align="center">
        1000
      </Typography>
      <Typography variant="h6" align="center">
        CPU cores
      </Typography>
    </Grid>

    <Grid item xs={12} sm={6} md={3}>
      <Typography variant="h2" align="center">
        5000
      </Typography>
      <Typography variant="h6" align="center">
        GPU cores
      </Typography>
    </Grid>
{/*  
    <Grid item xs={12} sm={6} md={3}>
      <Typography variant="h2" align="center">
        266
      </Typography>
      <Typography variant="h6" align="center">
        Tflops
      </Typography>
    </Grid>
*/}
    <Grid item xs={12} sm={6} md={3}>
      <Typography variant="h2" align="center">
        200
      </Typography>
      <Typography variant="h6" align="center">
        TB de almacenamiento
      </Typography>
    </Grid>

    <Grid item xs={12} sm={6} md={3}>
      <Typography variant="h2" align="center">
        8
      </Typography>
      <Typography variant="h6" align="center">
        TB RAM
      </Typography>
    </Grid>

  </Grid>

      <Box my={4}>
        <img src="static\images\clusteruoh.jpeg" alt="Imagen del Cluster" width="25%" />
      </Box>
      <Box my={4}>
        <img src="static\images\Facilities_digenoma_lab_cluster.jpeg" alt="Imagen del Cluster" width="50%" />
      </Box>

      {/* Aquí puedes agregar las imágenes y gráficos correspondientes */}
      {/* Puedes usar Grid para estructurar las imágenes y textos dentro de esta sección. */}

      {/* Sección Recursos computacionales */}
      {/* 
      <Typography variant="h3" gutterBottom>Recursos computacionales</Typography>
      <Typography paragraph>La distribución de todos estos recursos computacionales...</Typography>
*/}
      <Paper elevation={2}>
        {/* Aquí puedes agregar la tabla con los nodos, modelos, cantidad, etc. */}
      </Paper>

    </Container>
  );
}