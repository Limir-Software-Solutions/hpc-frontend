import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Stack from '@mui/material/Stack';
import Targetas from './Targetas';

export default function Home() {
  return (
    <div className="justify-center items-center flex my-16">
    <Targetas 
      imagen="/static/images/Logouoh.png"
      titulo="Nosotros"
      texto="El HPC de la UOH proporciona experiencia, capacidad de cómputo, servicios y capacitación para permitir la investigación intensiva en computación y ciencia de datos."
    />
    <Targetas 
      imagen="/static/images/Logouoh.png"
      titulo="Servicios"
      texto="Nuestros servicios están diseñados para ofrecer soporte e innovación basada en supercómputo (HPC)."
    />
    <Targetas 
      imagen="/static/images/Logouoh.png"
      titulo="Infraestructura"
      texto="El supercomputador más poderoso de Chile está disponible para los investigadores de todo el país."
    />
  </div>
  );
}