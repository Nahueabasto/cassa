import React, { useEffect } from 'react';
import Navbar from '../component/Navbar';
import ServiciosCabañas from '../component/Servicios/ServiciosCabañas';
import Footer from '../component/Footer';

export default function Servicios(){
    return(
        <div>
       <Navbar />
       <ServiciosCabañas />
       <Footer />
        </div>
    )
} 