// import React, { useState, useEffect } from "react";
// import Imagen from "../img/4.jpg";
// import image1 from "../img/5.jpg";
// import image2 from "../img/6.jpg";
// import image3 from "../img/7.jpg";
// import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
// import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
// import "./Slider.css";

// const Slider = () => {
//   const [slidePictures, setSlidePictures] = useState([
//     { image: Imagen, url: '/40' },
//     { image: image1, url: '/32' },
//     { image: image2, url: '/21' },
//     { image: image3, url: '/10' }
//   ]);
//   const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
//   const [imageLoaded, setImageLoaded] = useState(false);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       // Avanzar al siguiente slide
//       setCurrentSlideIndex((prevIndex) =>
//         prevIndex === slidePictures.length - 1 ? 0 : prevIndex + 1
//       );
//       // Reiniciar el estado de carga de la imagen
//       setImageLoaded(false);
//     }, 9000); // Cambiar cada 4 segundos (ajusta según tus necesidades)

//     // Limpiar el intervalo cuando el componente se desmonta o el slide cambia
//     return () => clearInterval(interval);
//   }, [currentSlideIndex, slidePictures]);

//   const handlePrev = () => {
//     setCurrentSlideIndex((prevIndex) => (prevIndex - 1 + slidePictures.length) % slidePictures.length);
//   };

//   const handleNext = () => {
//     setCurrentSlideIndex((prevIndex) => (prevIndex + 1) % slidePictures.length);
//   };

//   return (
//     <div className="hero">
//       <div className="mask">
//         <img
//           className="into-img"
//           src={slidePictures[currentSlideIndex].image}
//           alt="Imagen de computadora"
//           onLoad={() => setImageLoaded(true)} // Marcar la imagen como cargada
//         />
//         <div className="slide-controls">
//           <div className="slide-control prev" onClick={handlePrev}>
//             <ArrowBackIosNewIcon size={50} style={{ color: "#fff", fontSize: "" }} />
//           </div>
//           <div className="slide-control next" onClick={handleNext}>
//             <ArrowForwardIosIcon size={50} style={{ color: "#fff", fontSize: "" }} />
//           </div>
//         </div>
//       </div>
//       <div className="content">
//         {imageLoaded && (
//           <h2>{slidePictures[currentSlideIndex].phrase}</h2>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Slider;
import React, { useState, useEffect } from "react";
import Imagen from "../img/4.jpg";
import image1 from "../img/5.jpg";
import image2 from "../img/6.jpg";
import image3 from "../img/7.jpg";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import CloseIcon from '@mui/icons-material/Close';
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
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    let interval;
    if (!modalVisible) {
      interval = setInterval(() => {
        setCurrentSlideIndex((prevIndex) =>
          prevIndex === slidePictures.length - 1 ? 0 : prevIndex + 1
        );
        setImageLoaded(false);
      }, 9000);
    }
    return () => clearInterval(interval);
  }, [currentSlideIndex, slidePictures, modalVisible]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (modalVisible) {
        if (event.key === "ArrowLeft") {
          handlePrev();
        } else if (event.key === "ArrowRight") {
          handleNext();
        } else if (event.key === "Escape") {
          setModalVisible(false);
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [modalVisible]);

  const handlePrev = () => {
    setCurrentSlideIndex((prevIndex) => (prevIndex - 1 + slidePictures.length) % slidePictures.length);
  };

  const handleNext = () => {
    setCurrentSlideIndex((prevIndex) => (prevIndex + 1) % slidePictures.length);
  };

  const handleModalPrev = (event) => {
    event.stopPropagation();
    handlePrev();
  };

  const handleModalNext = (event) => {
    event.stopPropagation();
    handleNext();
  };

  return (
    <div className="hero">
      <div className="mask">
        <img
          className="into-img"
          src={slidePictures[currentSlideIndex].image}
          alt="Imagen de computadora"
          onClick={() => setModalVisible(true)}
          onLoad={() => setImageLoaded(true)}
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
      {modalVisible && (
        <div className="modal-background" onClick={() => setModalVisible(false)}>
          <div className="modal-arrow modal-arrow-left" onClick={handleModalPrev}>
            <ArrowBackIosNewIcon size={50} />
          </div>
          <div className="modal-arrow modal-arrow-right" onClick={handleModalNext}>
            <ArrowForwardIosIcon size={50} />
          </div>
          <div className="image-counter">
            {`${currentSlideIndex + 1}/${slidePictures.length}`}
          </div>
          <div className="modal-close" onClick={() => setModalVisible(false)}>
            <CloseIcon size={50} />
          </div>
          <img
            className='imagen-modal'
            src={slidePictures[currentSlideIndex].image}
            alt={`Imagen ${currentSlideIndex + 1}`}
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
};

export default Slider;
