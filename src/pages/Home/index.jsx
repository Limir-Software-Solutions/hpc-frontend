import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Stack from '@mui/material/Stack';
import Cards from '../../components/Cards';

export default function Home() {
  return (
    <div className='justify-center items-center flex '>
    <Cards 
      imagen="/static/images/hpc.png"
      titulo="Towards a greater HPC capacity in Latin America"
      texto="Si usted contrata una plataforma de streaming cuyo servidor está en la India,
       su servicio será mucho más lento que si estuviera en Argentina. De eso se trata el Edge Computing,
        tendencia que gracias al 5G va en alza este año: tener centrales de datos lo más cerca del usuario final;
         algo que favorece especialmente a industrias como la minería, finanzas y el mundo gamer. Las AWS de Amazon,
          que están llegando a Chile, son un buen ejemplo."
    />
    </div>
  );
}