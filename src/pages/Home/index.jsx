import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {CardActionArea, Container} from '@mui/material';
import Stack from '@mui/material/Stack';
import Cards from '../../components/Cards';
export default function Home() {
  return (
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
  );
}