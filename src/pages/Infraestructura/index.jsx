import React from 'react';
import { Container, Card, Typography, Box, Grid, Paper } from '@mui/material';

export default function Infraestructura() {
  return (
    <Container>
      <Typography variant="h2" gutterBottom>Infraestructura</Typography>
      <Typography paragraph>
        El supercomputador del UOH, IBM-idataPlex Cluster, es una infraestructura de...
        {/* Resto de la introducción */}
      </Typography>

      <Box my={2}>
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

      <Grid container spacing={4}>
        {/* Aquí puedes usar Grid items para estructurar los datos de capacidad total, como CPU cores, GPU cores, etc. */}
      </Grid>

      {/* Imagen del servidor */}
      <Box my={4}>
        <img src="static\images\clusteruoh.jpeg" alt="Imagen del Cluster" width="25%" />
      </Box>

      {/* Aquí puedes agregar las imágenes y gráficos correspondientes */}
      {/* Puedes usar Grid para estructurar las imágenes y textos dentro de esta sección. */}

      {/* Sección Recursos computacionales */}
      <Typography variant="h3" gutterBottom>Recursos computacionales</Typography>
      <Typography paragraph>La distribución de todos estos recursos computacionales...</Typography>

      <Paper elevation={2}>
        {/* Aquí puedes agregar la tabla con los nodos, modelos, cantidad, etc. */}
      </Paper>

    </Container>
  );
}
