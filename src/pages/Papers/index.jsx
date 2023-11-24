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

            <div className=" justify-center md:flex-row">
                {papers.map((paper, index) => (
                    <div className="flex flex-col my-6">

                        <Card className="border-x border-x-4 shadow-lg ">
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
                                    size="large"
                                    onClick={() => window.open(paper.publicationLink, "_blank")}
                                >Ir a la publicación</Button>
                            </CardActions>
                        </Card>

                    </div>
                ))}
            </div>

        </Container>
        </>
    );
}