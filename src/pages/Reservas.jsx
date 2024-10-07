import React, { useEffect } from 'react';
import Navbar from '../component/Navbar';
import Footer from '../component/Footer';
import ContactoInfo from '../component/Reservas/ContactoInfo';
import ReservaTexto from '../component/Reservas/ReservasText';


export default function Reservas(){
    return(
        <div>
       <Navbar />
       <ReservaTexto />
       <ContactoInfo />
       <Footer />
        </div>
    )
} 