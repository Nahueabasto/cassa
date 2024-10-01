import React, { useEffect } from 'react';
import Navbar from '../component/Navbar';
import ServiciosCabañas from '../component/Servicios/ServiciosCabañas';
import Footer from '../component/Footer';
import TituloServicios from '../component/Servicios/TituloServicios';

export default function Servicios(){
    return(
        <div>
       <Navbar />
       <ServiciosCabañas />
       <Footer />
        </div>
    )
} 