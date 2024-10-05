import React, { useEffect, useState } from 'react';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import CloseIcon from '@mui/icons-material/Close';
import { useSwipeable } from 'react-swipeable';
import "./Cabañastext.css";
import img from "../../img/3.jpg";
import im from "../../img/10.jpg";
import imge from "../../img/11.jpg";


const Cabañastext = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);

  const [slidePictures, setSlidePictures] = useState([
    { image: img, url: '/40' },
    { image: im, url: '/32' },
    { image: imge, url: '/32' },
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
    <div className='detee'>
    {/* <h2>Nuestras Cabañas</h2> */}
    <div className="detalle-f">
      <div className='textoo'>
        <h3>¡Bienvenidos a Cabañas Nahuel!</h3>
        <p>Nuestro complejo de cabañas, atendido por sus propios dueños, está diseñado para hacer de tus vacaciones un momento inolvidable, lleno de paz y tranquilidad. Nos renovamos constantemente para ofrecerte una experiencia única y personalizada, justo lo que necesitas para desconectar y disfrutar.</p>
        <p>Nos encontramos en el hermoso Valle de Calamuchita, en la localidad de Villa Berna, provincia de Córdoba (Argentina), un encantador pueblo donde la serenidad y la naturaleza son los verdaderos protagonistas. Con paisajes que parecen sacados de una postal, Villa Berna es el refugio ideal para quienes buscan relajarse en un entorno natural.</p>
        <p> Nuestras cabañas están ubicadas en un lugar estratégico para disfrutar de la belleza del entorno. A pocos minutos de ríos cristalinos y rodeadas por las majestuosas Sierras Grandes y Sierras Chicas, cada rincón de este lugar te invita a desconectar del mundo. Además, estamos cerca del centro de Villa Berna, lo que facilita el acceso a todos los servicios y actividades de la zona.</p>
        <p>Te invitamos a conocernos y vivir una experiencia única, en un entorno lleno de naturaleza y tranquilidad.</p>
      </div>
      <div className="imagenes-container" style={{ position: 'relative' }} {...handlers}>
        <div className="slider-container">
        <div className="control">
  <div className="con flecha prev" onClick={handlePrev}>
    <ArrowBackIosNewIcon size={50} />
  </div>
  <div className="con flecha next" onClick={handleNext}>
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
    </div>
  </div>
  );
};


export default Cabañastext;