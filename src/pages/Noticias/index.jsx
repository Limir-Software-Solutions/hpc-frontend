import React, {useEffect, useState} from 'react';
import { Container, Card, Typography, Box, Grid, Paper, CardMedia, CardContent, CardActions, Button } from '@mui/material';
import axios from 'axios'

export default function Noticias() {

    const [articles, setArticles] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const {data} = await axios.get('https://services-hpc.onrender.com/news')
            setArticles(data.rows)
        }

        fetchData()
    }, []);

    console.log(articles)

    return (
        <Container>
            <Box my={4}>
                <Typography variant="h4" component="h1" gutterBottom>
                    Noticias
                </Typography>
            </Box>
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
                                    image={ "https://via.placeholder.com/250x250"}
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
                )) }
            </Grid>
        </Container>
    );
}

