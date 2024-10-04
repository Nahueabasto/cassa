import React, { useEffect } from 'react';
import Navbar from '../component/Navbar';
import ServiciosCabañas from '../component/Servicios/ServiciosCabañas';
import TextoServicios from '../component/Servicios/TextoServicios';
import Footer from '../component/Footer';


export default function Servicios(){
    return(
        <div>
       <Navbar />
       <TextoServicios />
       <ServiciosCabañas />
       <Footer />
        </div>
    )
} 