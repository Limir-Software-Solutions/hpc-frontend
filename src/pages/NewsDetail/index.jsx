import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import {Container} from "@mui/material";

export default function NewsDetail() {

    const [article, setArticle] = useState({})
    const params = useParams();

    console.log(params)
    useEffect(() => {
        const fetchData = async id => {
            const {data} = await axios.get(`https://services-hpc.onrender.com/news/${params.id}`)
            setArticle(data)
        }

        fetchData()
    }, []);

    console.log(article)

    return (
        <Container
            sx={{
                display: "flex",
                flexDirection: "column",
            }}
        >
            <h1
                className="text-4xl font-bold mt-16"
            >
                {article.title}
            </h1>
            <h3
                className="font-bold my-4 text-sm"
            >{article.publicationDate}</h3>

            {article.image &&
                <img
                    src={article.image.src}
                    title={article.image.title}
                    className="w-full h-auto"
                />
            }
            <p
                className="my-12 text-lg"
            >
                {article.description}
            </p>
        </Container>
    )
}