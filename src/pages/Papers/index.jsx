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
        <>
            <div className="py-20 bg-sky-700" style={{ position: "relative" }}>
                <Container>
                    <h1 className="text-3xl text-white font-medium text-left my-2 uppercase ">
                        Publicaciones
                    </h1>
                </Container>
            </div>
        <Container>

            <Grid container spacing={4} sx={{ marginBottom: "4rem" }}>
                {papers.map((paper, index) => (
                    <div className="flex flex-col justify-items-center my-2 mx-3 mt-3">
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <Card sx={{
                            flexBasis: '30%',
                            maxWidth: 1500,
                            width: 1500,
                            height: 175,
                            borderRadius: 10,
                            boxShadow: 3,
                            marginY: 2,
                            marginX: 2,
                            '@media (max-width: 600px)': {
                                flexDirection: 'row',
                            },
                        }}>
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
                    </div>
                ))}
            </Grid>

        </Container>
        </>
    );
}