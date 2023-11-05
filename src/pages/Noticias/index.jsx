import React from 'react';
import { Container, Card, Typography, Box, Grid, Paper, CardMedia, CardContent, CardActions, Button } from '@mui/material';
import Provider from './Provider.json' // Asegúrate de que la ruta sea la correcta

export default function Noticias() {
    const { provider, articles } = Provider;

    return (
        <Container>
            <Box my={4}>
                <Typography variant="h4" component="h1" gutterBottom>
                    Noticias{/* de {provider.name}*/}
                </Typography>
                {/* Puedes incluir más detalles del proveedor aquí si es necesario */}
            </Box>
            <Grid container spacing={4}>
                {articles.map((article, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <Card>
                            {article.image && (
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image={article.image}
                                    alt={article.title}
                                />
                            )}
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {article.title}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {article.summary}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {article.date}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Por: {article.author}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small">Leer más</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}
