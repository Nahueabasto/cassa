import React, { useEffect, useState } from 'react';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import CloseIcon from '@mui/icons-material/Close';
import { useSwipeable } from 'react-swipeable';
import "./ServiciosCabañas.css";
import img from "../../img/8.jpg";
import im from "../../img/9.jpg";
// import im from "../../img/5.jpg";
// import im from "../../img/5.jpg";


const ServiciosCabañas = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);

  const [slidePictures, setSlidePictures] = useState([
    { image: img, url: '/40' },
    { image: im, url: '/32' },
    // { image: im, url: '/32' },
    // { image: im, url: '/32' },
  ]);

  const abrirModal = () => {
    setModalVisible(true);
  };

  const cerrarModal = () => {
    setModalVisible(false);
  };

  const handlePrev = (event) => {
    event.stopPropagation(); // Evita cerrar el modal si haces clic en las flechas
    setCurrentSlideIndex((prevIndex) => (prevIndex - 1 + slidePictures.length) % slidePictures.length);
  };

  const handleNext = (event) => {
    event.stopPropagation(); // Evita cerrar el modal si haces clic en las flechas
    setCurrentSlideIndex((prevIndex) => (prevIndex + 1) % slidePictures.length);
  };

  useEffect(() => {
    const handleKeyboardNavigation = (event) => {
      if (modalVisible) {
        if (event.key === 'Escape') {
          cerrarModal();
        } else if (event.key === 'ArrowLeft') {
          handlePrev(event);
        } else if (event.key === 'ArrowRight') {
          handleNext(event);
        }
      }
    };

    window.addEventListener('keydown', handleKeyboardNavigation);
return () => {
  window.removeEventListener('keydown', handleKeyboardNavigation);
};
  }, [modalVisible]);

  const handlers = useSwipeable({
    onSwipedLeft: handleNext,
    onSwipedRight: handlePrev,
  });

  return (
    <div className='dete'>
    <h2>Servicios que ofrece Cabañas Nahuel</h2>
    <div className="detalle-f">
      <div className="imagenes-container" style={{ position: 'relative' }} {...handlers}>
        <div className="slider-container">
        <div className="slide-contro">
  <div className="slide-control flecha prev" onClick={handlePrev}>
    <ArrowBackIosNewIcon size={50} />
  </div>
  <div className="slide-control flecha next" onClick={handleNext}>
    <ArrowForwardIosIcon size={50} />
  </div>
</div>
  
          {slidePictures.map((item, idx) => (
        <div
          key={idx}
          style={{ display: idx === currentSlideIndex ? 'block' : 'none' }}
        >
          <img
            src={item.image}
            alt={`Imagen ${idx + 1}`}
            onClick={abrirModal} // Abre el modal al hacer clic en la imagen
          />
        </div>
      ))}
    </div>
  </div>
      {modalVisible && (
        <div className="modal-background" onClick={cerrarModal}>
          <div className="modal-arrow modal-arrow-left" onClick={handlePrev}>
            <ArrowBackIosNewIcon size={50} />
          </div>
          <div className="modal-arrow modal-arrow-right" onClick={handleNext}>
            <ArrowForwardIosIcon size={50} />
          </div>
          <div className="image-counter">
            {`${currentSlideIndex + 1}/${slidePictures.length}`}
          </div>
          <div className="modal-close" onClick={cerrarModal}>
            <CloseIcon size={50} />
          </div>
          <img
            className='imagen-modal'
            src={slidePictures[currentSlideIndex].image}
            alt={`Imagen ${currentSlideIndex + 1}`}
            onClick={(e) => e.stopPropagation()} // Evita que el modal se cierre al hacer clic en la imagen
          />
        </div>
      )}
      <div className='texto'>
        <h3>Cabañas Nahuel ofrece los siguientes servicios en su complejo:</h3>
        <p><span class="bullet">•</span> Desayuno a la carta.</p>
        <p><span class="bullet">•</span> Piscina y solárium.</p>
        <p><span class="bullet">•</span> Servicio de limpieza.</p>
        <p><span class="bullet">•</span> Wifi.</p>
        <p><span class="bullet">•</span> Television satelital.</p>
        <p><span class="bullet">•</span> Cocheras cubiertas e individuales.</p>
        <p><span class="bullet">•</span> Aire Acondicionado (Todas las cabañas)</p>
        <p><span class="bullet">•</span> Horno Microondas</p>
      </div>
    </div>
  </div>
  );
};

export default ServiciosCabañas;
