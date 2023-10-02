
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

function Cards({ imagen, titulo, texto }) {
	return (
		<Card
			sx={{
				flexBasis: '30%',
				maxWidth: 345,
				height: 450,
				borderRadius: 10,
				boxShadow: 3,
				marginY: 2,
				'@media (max-width: 600px)': {
					flexDirection: 'column',
				},
			}}
		>
			<CardActionArea>
				<CardMedia
					component="img"
					sx={{
						maxWidth: '100%',
						maxHeight: '270px',
						'@media (max-width: 650px)': {
							maxHeight: '350px',
						}
					}}
					image={imagen}
					alt={titulo}
				/>
				<CardContent>
					<Typography gutterBottom variant="h5" component="div">
						{titulo}
					</Typography>
					<Typography variant="body2" color="text.secondary">
						{texto}
					</Typography>
				</CardContent>
			</CardActionArea>
		</Card>
	);
}

export default Cards;
