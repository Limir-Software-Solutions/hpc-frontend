import React, { useEffect, useState } from 'react';
import { Container, Card, Typography, Box, Grid, Paper, CardContent, CardActions, Button } from '@mui/material';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

export default function Papers() {
    const [papers, setPapers] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            const { data } = await axios.get('https://services-hpc.onrender.com/papers');
            const sortedPapers = data.rows.sort((a, b) => new Date(a.publicationDate) - new Date(b.publicationDate));
            setPapers(sortedPapers);
        };

        fetchData();
    }, []);

    return (
        <Container>
            <Box my={4}>
                <Typography variant="h4" component="h1" gutterBottom>
                    Papers
                </Typography>
            </Box>
            <Grid container spacing={4} sx={{ marginBottom: "4rem" }}>
                {papers.map((paper, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <Card>
                            {/* Aquí puedes agregar una imagen si está disponible */}
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {paper.title}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {paper.abstract}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Fecha de Publicación: {new Date(paper.publicationDate).toLocaleDateString()}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Autores: {paper.authors.map(author => author.name).join(', ')}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button
                                    size="small"
                                    onClick={() => window.open(paper.publicationLink, "_blank")}
                                >Leer más</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}
