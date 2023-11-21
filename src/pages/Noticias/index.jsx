import React, {useEffect, useState} from 'react';
import { Container, Card, Typography, Box, Grid, Paper, CardMedia, CardContent, CardActions, Button } from '@mui/material';
import axios from 'axios'
import { useNavigate } from "react-router-dom";

export default function Noticias() {

    const [articles, setArticles] = useState([])
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            const {data} = await axios.get('https://services-hpc.onrender.com/news')
            const sortedArticles = data.rows.sort((a, b) => new Date(a.publicationDate) - new Date(b.publicationDate));
            setArticles(sortedArticles)
        }

        fetchData()
    }, []);

    console.log(articles)

    return (
        <>
        <div className="py-20 bg-sky-700 my-4" style={{ position: "relative" }}>
            <Container>
                <h1 className="text-3xl text-white font-medium text-left my-2 uppercase ">
                    Noticias
                </h1>
            </Container>
        </div>
        <Container>

            <Grid container spacing={4} sx={{
                marginBottom: "4rem"
            }}>
                {  articles.map((article, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <Card>
                            {article.image && (
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image={ article.image.src }
                                    alt={article.image.title}
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
                                <Button
                                    size="small"
                                    onClick={() => navigate(`/detail/${article._id}`)}
                                >Leer más</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                )) }
            </Grid>
        </Container>
        </>
    );
}

