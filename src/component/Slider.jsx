import React, { useState, useEffect } from "react";
import Imagen from "../img/4.jpg";
import image1 from "../img/5.jpg";
import image2 from "../img/6.jpg";
import image3 from "../img/r.jpg";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import "./Slider.css";

const Slider = () => {
  const [slidePictures, setSlidePictures] = useState([
    { image: Imagen, url: '/40' },
    { image: image1, url: '/32' },
    { image: image2, url: '/21' },
    { image: image3, url: '/10' }
  ]);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      // Avanzar al siguiente slide
      setCurrentSlideIndex((prevIndex) =>
        prevIndex === slidePictures.length - 1 ? 0 : prevIndex + 1
      );
      // Reiniciar el estado de carga de la imagen
      setImageLoaded(false);
    }, 4000); // Cambiar cada 4 segundos (ajusta según tus necesidades)

    // Limpiar el intervalo cuando el componente se desmonta o el slide cambia
    return () => clearInterval(interval);
  }, [currentSlideIndex, slidePictures]);

  const handlePrev = () => {
    setCurrentSlideIndex((prevIndex) => (prevIndex - 1 + slidePictures.length) % slidePictures.length);
  };

  const handleNext = () => {
    setCurrentSlideIndex((prevIndex) => (prevIndex + 1) % slidePictures.length);
  };

  return (
    <div className="hero">
      <div className="mask">
        <img
          className="into-img"
          src={slidePictures[currentSlideIndex].image}
          alt="Imagen de computadora"
          onLoad={() => setImageLoaded(true)} // Marcar la imagen como cargada
        />
        <div className="slide-controls">
          <div className="slide-control prev" onClick={handlePrev}>
            <ArrowBackIosNewIcon size={50} style={{ color: "#fff", fontSize: "" }} />
          </div>
          <div className="slide-control next" onClick={handleNext}>
            <ArrowForwardIosIcon size={50} style={{ color: "#fff", fontSize: "" }} />
          </div>
        </div>
      </div>
      <div className="content">
        {imageLoaded && (
          <h2>{slidePictures[currentSlideIndex].phrase}</h2>
        )}
      </div>
    </div>
  );
};

export default Slider;
