import React, { useEffect, useRef, useState } from "react";
import {
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  Box,
  Link,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import axios from "axios";

export default function NewsSlider() {
  const sliderRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(
        "https://services-hpc.onrender.com/news",
      );
      const sortedArticles = data.rows.sort(
        (a, b) => new Date(a.publicationDate) - new Date(b.publicationDate),
      );
      setNews(sortedArticles);
    };

    fetchData();
  }, []);

  const slidesToShow = window.innerWidth < 600 ? 1 : 3;

  const handleSlideChange = (newSlide) => {
    setCurrentSlide(newSlide);
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    beforeChange: (current, next) => {
      setCurrentSlide(next);
    },
  };

  const goToPrevSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  const goToNextSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      sx={{
        paddingBottom: "244px",
      }}
    >
      <Box
        sx={{
          width: "100%",
          textAlign: "left",
          marginX: "auto",
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "20px",
        }}
      >
        <Typography
          variant="h1"
          sx={{
            fontWeight: "700",
            fontSize: { xs: "22px", lg: "47px" },
          }}
        >
          Noticias
        </Typography>
        <Button
          href="/noticias"
          variant="outlined"
          color="inherit"
          sx={{
            border: "none",
            fontFamily: "Poppins",
            fontSize: "16px",
            fontStyle: "normal",
            fontWeight: "700",
            textTransform: "none",
          }}
        >
          Ver Mas Noticias <ArrowForwardIcon sx={{ paddingLeft: "5px" }} />
        </Button>
      </Box>

      <Box
        sx={{
          width: "100%",
          overflow: "hidden",
          textAlign: "left",
        }}
      >
        <Slider {...settings} ref={sliderRef}>
          {news.map((data, index) => (
            <div key={index}>
              <Card
                sx={{
                  width: "95%",
                  border: "none !important",
                  boxShadow: "0 0 transparent",
                  borderRadius: "0",
                  height: "500px",
                }}
              >
                <CardActionArea component="div" sx={{ height: "100%" }}>
                  <CardMedia
                    component="img"
                    height="300px"
                    width="300px"
                    image={data.image?.src || ""}
                    alt={data.image?.title || ""}
                    sx={{
                      height: "60%",
                      justifyContent: "space-between",
                    }}
                  />
                  <CardContent sx={{ height: "100%" }}>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="div"
                      sx={{ textAlign: "left" }}
                    >
                      {data.title || ""}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </div>
          ))}
        </Slider>
      </Box>

      {/* Arrows Mobile */}
      <Box
        sx={{
          display: { xs: "flex", md: "none", lg: "none" },
          justifyContent: "space-between",
          marginTop: "16px",
        }}
      >
        <ArrowBackIcon sx={{ cursor: "pointer" }} onClick={goToPrevSlide} />
        <ArrowForwardIcon sx={{ cursor: "pointer" }} onClick={goToNextSlide} />
      </Box>

      {/* Ver más proyectos Button */}
      <Box
        sx={{
          display: { xs: "none", md: "none", lg: "flex" },
          justifyContent: "right",
          paddingLeft: "200px",
          marginBottom: "-100px",
        }}
      ></Box>
    </Grid>
  );
}
